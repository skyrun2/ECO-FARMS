import { ProfileForm } from "@/components/general/form";
import { ContactList, contacts } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import clsx from "clsx";
import { Clock } from "lucide-react";



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
                    <h2 className="mb-6 text-2xl font-bold  text-eco-brown ">Send Us a Message</h2>
                    {/* <ProfileForm/> */}
                </div>
                <div className="space-y-8">
                    <Card className="p-8 bg-white rounded-xl shadow-lg">
                        <h2 className="mb-6 text-2xl font-bold text-eco-brown">Contact Information</h2>
                        <ContactList contacts={contacts}/>
                    </Card>
                    <Card className="p-8 bg-white rounded-xl shadow-lg">
                        <h2 className="mb-6 text-2xl font-bold text-eco-brown">Buisness Hours</h2>
                        <div className="flex items-start space-x-4">
                            <span className=" w-12 h-12 bg-pri-green  rounded-full flex items-center justify-center">
                                <Clock/>
                                </span>
                                <div>
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

