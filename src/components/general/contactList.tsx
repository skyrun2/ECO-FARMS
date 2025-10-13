import clsx from "clsx";
import { LucideIcon } from "lucide-react";


export type HrefsTypes  = "tele"|"whatsapp" | "mail"|"address";

export type Contact = {
    icon : LucideIcon;
    contact:string;
    type : HrefsTypes;
    href: string
    
}

export type ContactListProps = {
    user: "contact"|"footer";
    contacts:Contact[];
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
export const ContactList = ({contacts,user}:ContactListProps) =>{
    const isContact = user == "contact";
    if (user == "contact"){
        console.log(isContact);
    }
    
    return(
        <ul className={clsx(
            " f-contacts ",        
        )}>
            {user == "footer" && <p className="text-[1.125rem] text-white font-[700]">Contacts</p>}
            <div className="w-full flex flex-col gap-[1rem]">
            {contacts.map((e,i)=>(
                <li key={i} className="grid grid-cols-[1fr_3fr] gap-[rem] items-center ">
                    <span className={clsx(
                        !isContact && "w-[1rem] h-[1rem]  bg-transparent  text-pri-green",
                        isContact && "w-12 h-12 bg-pri-green rounded-full flex items-center justify-center text-white"
                    )}>  
                        <e.icon className="" />
                    </span>
                    {user == "contact" && 
                        
                        <div className="w-full">
                            <p className="font-bold text-eco-brown text-[1.125rem] capitalize">{e.type}</p>        
                            <a href= {hrefBuilder(e.type,e.href)}
                                className="text-gray-600 text-[1.125rem]  hover:text-[#4CAF50] transition-colors">
                                {e.contact}
                            </a>
                        </div>}
                        { user =="footer" &&
                            <a href= {hrefBuilder(e.type,e.href)}
                            className=" text-[1rem]  hover:text-pri-green text-gray-600 font-normal ">
                                {e.contact}
                            </a>
                        }
                </li>
            ))}
            </div>

        </ul>
    )
}

