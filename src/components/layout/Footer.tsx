import Link from "next/link";
import {Tele, Whatsapp, Wheat } from "../icons/index";

import { SVGProps } from "react";
import clsx from "clsx";
import { LucideIcon, LucideProps, Mail, Map, MapPin, MessageCircle, Phone } from "lucide-react";
import { Contact, ContactList } from "../general/contactList";




type FooterDetails = {
    title: string;
    desc: string;
    contacts: Contact[];
    cc:string;
}
export const contacts : Contact[] = [

        {
            icon: Phone,
            contact:"08039698827",    
            type:"tele",
            href: "08039698827",

        },
        {
            icon:Mail,
            contact: "acomegbu@gmil.com",
            type:"mail",
            href: "acomegbu@gmil.com",

        },
        {
            icon: MessageCircle,
            contact:"08039698827",            
            type:"whatsapp",
            href:"//wa.me/2348039698827",
        },
        {
            icon: MapPin,
            contact:"123 Farm Road Agriculture Valley, State 12345", 
            type:"address",
            href:"",
        },
    ];
const footerDetails : FooterDetails = {
    title: "ECO-FARMS",
    desc:"Your trusted partner for quality livestock feeds, fresh meat, and seafood. Serving the agricultural community with premium products.",
    contacts: contacts,
    cc:" 2025 ECO-FARMS. All rights reserved. | created by skyrun"

}
export {Footer};
const Footer = () =>{
    
    
    return(
        <div className="w-full h-fit bg-eco-brown flex items-center justify-center">
            <div className={clsx(
                "wrapper max-w-[80rem] mx-auto  px-[2rem] py-[3rem]",
                "max-md:px-[1rem]",
                "max-sm:px-[1.5rem]"
            )}>
                <div className={clsx(
                    "grid grid-cols-3 gap-[2rem]",
                    "max-md:grid-cols-1",
                )}>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center space-x-[.5rem]">
                            <span>
                            <Wheat className="text-pri-green w-[1.5rem] "/>
                            </span>
                            <p className="text-[1.2rem] font-[700] text-light">ECO-FARMS</p>
                        </div>
                        <p className=" text-sm text-gray-300">{footerDetails.desc}</p>
                    </div>                    
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-white font-[700]">Quick Links</p>
                        <div className=" text-sm text-gray-300 [&>a:hover]:text-hover-green grid grid-cols-1">
                            <Link href="">Products</Link>
                            <Link href="">About</Link>
                            <Link href="">Contact</Link>
                            <Link href="">Favourites</Link>
                        </div>
                    </div>
                    <ContactList user="footer" contacts={footerDetails.contacts}/>
                </div>
                <div className=" mt-[2rem] f-btm border-t-[1px] border-gray-300 w-full h-[5rem]  text-gray-300 ">
                    <p className="mt-[.5rem] text-sm">&copy;{footerDetails.cc}</p>

                </div>
            </div>
        </div>
    )
}

