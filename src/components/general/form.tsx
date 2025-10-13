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

 export function ProfileForm(){
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
        <FormField
          control={form.control}
          name = "fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-eco-brown text-sm font-bold">Full Name *</FormLabel>
              <FormControl className={clsx(
                "px-4 py-3 w-full  border border-gray-300 rounded-lg focus:ring-2 focus:ring-pri-green focus:border-transparent text-lg"
              )}>
                <Input placeholder="Enter Your full name" {...field} />
              </FormControl>
              {/* <FormDescription>
                Your message will be submited with this name
              </FormDescription> */}
              <FormMessage />
            </FormItem>                        
          )}
        />

        <FormField
          control={form.control}
          name = "fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-eco-brown text-sm font-bold" >Email Address *</FormLabel>
              <FormControl className={clsx(
                "px-4 py-3 w-full  border border-gray-300 rounded-lg focus:ring-2 focus:ring-pri-green focus:border-transparent text-lg"
              )}>
                <Input className="text-[2.125rem]" placeholder="Enter Your Email Adress" {...field} />
              </FormControl>
              {/* <FormDescription>
                Your message will be submited with this name
              </FormDescription> */}
              <FormMessage />
            </FormItem>                        
          )}
        />

        <FormField
          control={form.control}
          name = "fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-eco-brown text-sm font-bold" >Message *</FormLabel>
              <FormControl className={
                  " px-4 py-3 w-full  border border-gray-300 rounded-lg focus:ring-2 focus:ring-pri-green focus:border-transparent  text-lg resize-vertical"
                } >
                <Textarea 
                className="h-[9.75rem]"  
                placeholder="Tell us about your needs or questions.." {...field} />
              </FormControl>
              {/* <FormDescription>
                Your message will be submited with this name
              </FormDescription> */}
              <FormMessage />
            </FormItem>                        
          )}
        />


        <Button 
        className={clsx(
          " px-6 py-4 w-full bg-pri-green text-white  rounded-lg font-bold  text-lg hover:bg-hover-green transition-colors flex items-center justify-center space-x-2"
        )}
        type="submit">
          <Send/>
          <p>Submit</p>
          </Button>
      </form>
    </Form>
    )
 }