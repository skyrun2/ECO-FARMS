
import { ContactList } from "@/components/general/contactList";
import { MessageForm } from "@/components/general/form";
import { contacts } from "@/components/layout/Footer";

import { Card } from "@/components/ui/card";
import clsx from "clsx";
import { Clock } from "lucide-react";

const placeholders ={
  fullName:"Enter Your full name",
  email: "Enter Your EmailAddress",
  message: " Tell us about your needs or questions"
}
const labels = {
    fullName:"Full Name *",
    email: "Email Address *",
    message: "Message *"
}


export default function Contact(){
    return(
        <section className={clsx(
            "mx-auto px-8 py-[6rem] max-w-[80rem] ",
            "max-lg:py-[4rem]",
            "max-md:py-6",
            "max-sm:px-4"
        )}>
            <div className="mb-16 text-center">
                <h1 className={clsx(
                    " mb-4 text-4xl  font-extrabold  text-eco-brown ",
                    "max-md:text-3xl "
                )}>Get In Touch</h1>
                <p className={clsx(
                    "mx-auto max-w-3xl text-lg text-gray-600 "
                )}>We&apos;re here to help with all your agricultural needs. Contact us today to learn more about our products and services.</p>
            </div>            
            <div className={clsx(
                "grid  grid-cols-2 gap-12",
                "max-md:grid-cols-1"
            )}>
                <div className="p-8 bg-white rounded-xl shadow-lg ">
                    <h2 className={clsx(
                        "mb-6 text-2xl font-bold  text-eco-brown ",
                        "max-sm:text-[1.25rem]"
                    )}>Send Us a Message</h2>
                    <MessageForm names={["fullName","email","message"]} placeholders={placeholders} labels={labels}/>
                </div>
                <div className="space-y-8">
                    <Card className="p-8 flex flex-col  bg-white rounded-xl shadow-lg">
                        <h2 className={clsx(
                            "mb text-2xl font-bold text-eco-brown",
                            "max-sm:text-[1.25rem]"
                        )}>Contact Information</h2>
                        <ContactList user="contact" contacts={contacts}/>
                    </Card>
                    <Card className="p-8 bg-white rounded-xl shadow-lg">
                        <h2 className={clsx(
                            " text-2xl font-bold text-eco-brown",
                            "max-sm:text-[1.25rem]"
                        )}>Business Hours</h2>
                        <div className="grid grid-cols-[1fr_3fr] items-start space-x-4">
                            <span className=" w-12 h-12 bg-pri-green  rounded-full flex items-center justify-center text-white" >
                                <Clock/>
                                </span>
                                <div className="text-gray-600">
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

