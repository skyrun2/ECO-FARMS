import Link from "next/link";
import {Tele, Whatsapp, Wheat } from "../icons/index";
import { Contact } from "lucide-react";
import { SVGProps } from "react";
import clsx from "clsx";

type HrefsTypes  = "tele"|"whatsapp" | "mail";
type Contact = {
    icon : React.FC<SVGProps<SVGSVGElement>>;
    contact:string;
    type : HrefsTypes;
    href: string
    
}

type FooterDetails = {
    title: string;
    desc: string;
    contacts: Contact[];
    cc:string;
}
const footerDetails : FooterDetails = {
    title: "ECO-FARMS",
    desc:"Your trusted partner for quality livestock feeds, fresh meat, and seafood. Serving the agricultural community with premium products.",
    contacts:[

        {
            icon: Tele,
            contact:"08039698827",    
            type:"tele",
            href: "08039698827",

        },
        // {
        //     icon:Mail,
        //     contact: "acomegbu@gmil.com",
        //     type:"mail",
        //     href: "acomegbu@gmil.com",

        // },
        {
            icon: Whatsapp,
            contact:"08039698827",            
            type:"whatsapp",
            href:"//wa.me/2348039698827",
        },
    ],
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
                    <div className="space-y-[1rem]">
                        <div className="flex items-center space-x-[.5rem]">
                            <span>
                            <Wheat className="text-pri-green w-[1.5rem] "/>
                            </span>
                            <p className="text-[1.125rem] font-[700] text-light">ECO-FARMS</p>
                        </div>
                        <p className=" text-gray-300">{footerDetails.desc}</p>
                    </div>                    
                    <div className="f-links space-y-[1rem]">
                        <p className="text-[1.125rem] text-white font-[700]">Quick Links</p>
                        <div className=" text-gray-300 [&>a:hover]:text-hover-green grid grid-cols-1">
                            <Link href="">Products</Link>
                            <Link href="">About</Link>
                            <Link href="">Contact</Link>
                            <Link href="">Favourites</Link>
                        </div>
                    </div>
                    <ContactList contacts={footerDetails.contacts}/>
                </div>
                <div className=" mt-[2rem] f-btm border-t-[1px] border-gray-600 w-full h-[5rem]  text-gray-300">
                    <p className="mt-[.5rem]">&copy;{footerDetails.cc}</p>

                </div>
            </div>
        </div>
    )
}


type ContactListProps = {
    contacts:Contact[]
}
const ContactList = ({contacts}:ContactListProps) =>{
    
    return(
        <ul className=" f-contacts space-y-[1rem]">
            <p className="text-[1.125rem] text-white font-[700]">Contacts</p>
            <div className="flex flex-col gap-[.5rem]">
            {contacts.map((e,i)=>(
                <li key={i} className="flex gap-[0.5rem]">
                    <span className="fill-eco-grey ">  
                        <e.icon className="w-[1.1875rem] aspect-square  fill-pri-green text-pri-green" />
                    </span>
                    <a href= {hrefBuilder(e.type,e.href)}
                    className=" text-[1rem]  hover:text-pri-green text-gray-300 font-normal ">
                        {e.contact}
                    </a>
                </li>
            ))}
            </div>

        </ul>
    )
}

function hrefBuilder( type:HrefsTypes,value:string){

    switch (type) {
    case "tele":
      return `tel:${value}`;
    case "mail":
      return `mailto:${value}`;
    case "whatsapp" :
        return value;
    default:
      return value; 
  }
}