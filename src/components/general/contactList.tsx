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
        <ul>
            {user == "footer" && <p className="text-sm text-white font-[700]">Contacts</p>}
            <div className="w-full flex flex-col gap-[1rem]">
            {contacts.map((e,i)=>(
                <li key={i} className="flex gap-4 items-center ">
                    <span className={clsx(
                        !isContact && "  bg-transparent  text-pri-green",
                        isContact && " w-[2rem] aspect-square bg-pri-green rounded-full flex items-center justify-center text-white"
                    )}>  
                        <e.icon className="aspect-square" 
                        width="1rem"
                        />
                    </span>
                    {user == "contact" && 
                        
                        <div className="w-full">
                            <p className="font-bold text-eco-brown text-sm capitalize">{e.type}</p>        
                            <a href= {hrefBuilder(e.type,e.href)}
                                className="text-gray-600 text-sm  hover:text-[#4CAF50] transition-colors">
                                {e.contact}
                            </a>
                        </div>}
                        { user =="footer" &&
                            <a href= {hrefBuilder(e.type,e.href)}
                            className=" text-sm  hover:text-pri-green text-gray-300 font-normal ">
                                {e.contact}
                            </a>
                        }
                </li>
            ))}
            </div>

        </ul>
    )
}

