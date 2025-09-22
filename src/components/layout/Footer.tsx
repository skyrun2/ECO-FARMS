import Link from "next/link";
import { LogoLink } from "../atoms/LogoLink";
import Logo from "../icons/logo";


import {Tele, Mail, Whatsapp, Wheat } from "../icons/index";
import { title } from "process";
import { Contact } from "lucide-react";
import { SVGProps } from "react";

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
    desc:"",
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
            <div className="wrapper pt-[2rem] w-[45%]  flex flex-col justify-between items-center gap-[2.5rem]">
                <div className="f-top w-full flex  justify-between">
                    <div className="f-left">
                        <div className="flex items-center ">
                            <span>
                            <Wheat className="text-pri-green w-[1.5rem] "/>
                            </span>
                            <p className="text-[1.125rem] font-[800] text-light">ECO-FARMS</p>
                        </div>
                    </div>
                    <div className=" f-right  flex justify-end gap-[10rem] text-[1.125rem] font-[800] text-light">
                        <div className="f-links flex-col">
                            <p>Quick Links</p>
                            <div className="flex flex-col text-eco-grey [&>a:hover]:text-hover-green text-[0.85rem] font-normal">
                                <Link href="">Products</Link>
                                <Link href="">About</Link>
                                <Link href="">Contact</Link>
                                <Link href="">Favourites</Link>
                            </div>
                        </div>
                        <ContactList contacts={footerDetails.contacts}/>
                    </div>
                </div>
                <div className="  f-btm border-t-[1px] border-eco-grey w-full h-[5rem] text-[.75rem] text-eco-grey">
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
        <ul className=" f-contacts">
            <p>Contacts</p>
            <div className="flex flex-col gap-[.5rem]">
            {contacts.map((e,i)=>(
                <li key={i} className="flex gap-[0.5rem]">
                    <span className="fill-eco-grey text-eco-grey">                                
                        <e.icon className="w-[1.1875rem] aspect-square  fill-eco-grey text-eco-grey" />
                    </span>
                    <a href= {hrefBuilder(e.type,e.href)}
                    className="text-[0.75rem] hover:text-pri-green text-eco-grey">
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