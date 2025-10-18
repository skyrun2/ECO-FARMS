"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
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
    fullName: z.string().min(2,{message:"name must be at least three characters long"}),
    phoneNumber: z.string(),
    message: z.string()

})
type FormValues = z.infer<typeof formSchema>;

export type FormName ="fullName"|"phoneNumber"|"message";
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
          phoneNumber:"",
          message:"",
      }
  })

  function onSubmit(values: FormValues){
      console.log(values);
      
  }
  
  return(
        <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8">
      {names.map((e,i)=>{
        return(
          <FormField
          control={form.control}
          name = {e}          
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg-desc text-eco-brown  font-bold">{labels[e]}</FormLabel>
              <FormControl className={clsx(
                "px-4 py-3 w-full  border border-gray-300 rounded-lg focus:ring-2 focus:ring-pri-green focus:border-transparent text-lg"
              )}>
                { e =="message" ?
                  <Textarea className="h-[12.125rem] text-sm-desc placeholder:text-sm-desc" placeholder={placeholders[e]} {...field} />
                  : <Input className="h-[3.375rem] text-sm-desc placeholder:text-sm-desc" placeholder={placeholders[e]} {...field} />
                }
                

                
              </FormControl>
              
              <FormMessage/>
            </FormItem>                        
          )}
          key={i}
          />

        )
      })}
      


      <Button 
      className={clsx(
        " px-6 py-4 w-full h-[3.75rem] bg-pri-green text-lg-desc text-white  rounded-lg font-bold   hover:bg-hover-green transition-colors flex items-center justify-center space-x-2"
      )}
      type="submit">
        <Send/>
        <p>Submit</p>
        </Button>
    </form>
  </Form>
  )
}

