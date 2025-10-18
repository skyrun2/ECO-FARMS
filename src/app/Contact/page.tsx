
import { ContactList } from "@/components/general/contactList";
import { MessageForm } from "@/components/general/form";
import { contacts } from "@/components/layout/Footer";

import { Card } from "@/components/ui/card";
import clsx from "clsx";
import { Clock } from "lucide-react";

const placeholders ={
  fullName:"Enter Your full name",
  phoneNumber: "Enter Your phone number",
  message: " Tell us about your needs or questions"
}
const labels = {
    fullName:"Full Name *",
    phoneNumber: "Phone Number *",
    message: "Message *"
}


export default function Contact(){
    return(
        <section className={clsx(
            "mx-auto px-8 py-[3rem] max-w-[80rem] ",
            "max-lg:py-[4rem]",            
            "max-sm:px-4"
        )}>
            <div className="mb-16 text-center">
                <h1 className={clsx(
                    " mb-4 text-lg-head  font-extrabold  text-eco-brown ",
                    
                )}>Get In Touch</h1>
                <p className={clsx(
                    "mx-auto max-w-3xl text-lg-desc text-gray-600 ",
                    "max-sm:text-sm-desc"
                )}>We&apos;re here to help with all your agricultural needs. Contact us today to learn more about our products and services.</p>
            </div>            
            <div className={clsx(
                "grid  grid-cols-2 gap-12",
                "max-md:grid-cols-1"
            )}>
                <div className="p-8 bg-white rounded-xl shadow-lg border">
                    <h2 className={clsx(
                        "mb-6 text-lg-head font-bold  text-eco-brown ",
                        
                    )}>Send Us a Message</h2>
                    <MessageForm names={["fullName","phoneNumber","message"]} placeholders={placeholders} labels={labels}/>
                </div>
                <div className="space-y-8">
                    <Card className="p-8 flex flex-col  bg-white rounded-xl shadow-lg">
                        <h2 className={clsx(
                            "mb text-[1.2rem] font-bold text-eco-brown",
                            
                        )}>Contact Information</h2>
                        <ContactList user="contact" contacts={contacts}/>
                    </Card>
                    <Card className=" p-8  bg-white rounded-xl shadow-lg gap-4">
                        <h2 className={clsx(
                            " text-[1.2rem] font-bold text-eco-brown",
                            
                        )}>Business Hours</h2>
                        <div  className="flex gap-4 items-center ">
                            <span className=" bg-pri-green w-[2rem] aspect-square flex items-center justify-center rounded-full">  
                                <Clock className="aspect-square text-white" 
                                width="1rem"
                                />
                            </span>
                            <div className="text-gray-600 text-sm">
                                <p>Monday - Friday: <span>7:00 AM - 6:00 PM</span></p>
                                <p>Saturday: <span>8:00 AM - 4:00 PM</span></p>
                                <p>Sunday: <span>Closed</span></p>
                            </div>
                        </div>
                    </Card>
                </div>
                
            </div>
        </section>
    )
}

