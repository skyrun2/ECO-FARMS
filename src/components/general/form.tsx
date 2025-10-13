"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import clsx from "clsx"
import { Send } from "lucide-react"
 
const formSchema = z.object({
    fullName: z.string().min(2,{message:"name must be atleast three characters long"}),
    email: z.email(),
    message: z.string()

})
type FormValues = z.infer<typeof formSchema>;

export type FormName ="fullName"|"email"|"message";
export type MessageFormProps = {
  names : FormName[];
  placeholders: Record<string,string>;
  labels: Record<string,string>;
}
export function MessageForm({names,placeholders,labels}:MessageFormProps){
  const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
          fullName:"",
          email:"",
          message:"",
      }
  })

  function onSubmit(values: FormValues){
      console.log(values);
      
  }
  
  return(
        <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {names.map((e,i)=>{
        return(
          <FormField
          control={form.control}
          name = {e}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-eco-brown text-sm font-bold">{labels[e]}</FormLabel>
              <FormControl className={clsx(
                "px-4 py-3 w-full  border border-gray-300 rounded-lg focus:ring-2 focus:ring-pri-green focus:border-transparent text-lg"
              )}>
                { e =="message" ?
                  <Textarea className="h-[12.125rem]" placeholder={placeholders[e]} {...field} />
                  : <Input className="h-[3.375rem]" placeholder={placeholders[e]} {...field} />
                }
                {/* { e !="message" &&
                  <Input className="h-[3.375rem]" placeholder={placeholders[e]} {...field} />
                } */}

                
              </FormControl>
              {/* <FormDescription>
                Your message will be submited with this name
              </FormDescription> */}
              <FormMessage/>
            </FormItem>                        
          )}
          key={i}
          />

        )
      })}
      


      <Button 
      className={clsx(
        " px-6 py-4 w-full h-[3.75rem] bg-pri-green text-white  rounded-lg font-bold  text-lg hover:bg-hover-green transition-colors flex items-center justify-center space-x-2"
      )}
      type="submit">
        <Send/>
        <p>Submit</p>
        </Button>
    </form>
  </Form>
  )
}

