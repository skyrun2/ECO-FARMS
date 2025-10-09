'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import {Heart, LucideProps, Menu, Wheat, X } from "lucide-react";
import Favourite from "../icons/Favourite";
import clsx from "clsx";
import { SVGProps, useState } from "react";
import { usePathname } from "next/navigation";


type NavLinks = {
    link:string;
    text:string;
    icon? : React.FC<SVGProps<SVGSVGElement>>;
}
const navLinks :NavLinks[] = [
    {
        link:"",
        text: "Home"
    },
    {
        link:"Products",
        text:"Products",
    },
    {
        link:"About",
        text:"About",
    },
    {
        link:"Contact",
        text:"Contact",
    },
    {
        link:"Favourites",
        text:"Favourites",
        icon: Heart,
    }
]

export {Header};

const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="sticky top-0 z-40  bg-pri-green  w-[100%]  shadow-lg ">
                <div className={clsx(
                    "max-w-[80rem] mx-auto px-8  ",
                    "max-md:px-4",
                    "max-sm:px-6"
                )}>
                    <div className="h-[4rem] flex items-center justify-between">
                        <LogoLink/>
                        {/* DESKTOP MODE */}
                        <li className={clsx(
                            " flex justify-between items-center  space-x-[2rem]",
                            "max-mb-nav:hidden"
                        )}>
                            <HeaderLinks/>
                        </li>
                        <Button className={clsx(
                            "hidden",
                            " aspect-square w-[2rem] max-mb-nav:flex items-center hover:bg-transparent shadow-none hover:text-eco-brown",
                        )} onClick={()=>setIsOpen(!isOpen)}>
                            {isOpen
                            ? <X/>
                            : <Menu/>  }
                        </Button>
                    </div>
                        {/* MOBILE MODE */}
                    <li className={clsx(
                        "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-pri-green ",
                        "max-sm:px-3",
                        "hidden",
                        isOpen &&  "max-mb-nav:flex max-mb-nav:flex-col "
                    )}>
                        <HeaderLinks isOpen=""/>
                    </li>
                </div>
            </nav>
        </>
    )
}

export interface HeaderLinkProps {        
    className?: string;
    isOpen?: string;

}
const HeaderLinks = ({className="",isOpen} : HeaderLinkProps) =>{
        const pathname = usePathname();
        console.log(pathname == "/");
        
        
                
    return(
        <>
            {
                navLinks.map((e,i)=>{
                    const href = "/"+e.link;
                    let isCurrPage = false;
                    isCurrPage = pathname == href ? true :false;
                    if (href == "/") {
                        console.log({isOpen,pathname,href});
                        
                    }
                    
                    return(
                        <Link key={i} href={href}>
                            <Button className={clsx(
                                "hover:bg-hover-green  cursor-pointer text-[0.875rem] shadow-none space-x-1 px-3 py-2 rounded-md text-sm font-medium ",
                                e.icon && "flex items-center",
                                isCurrPage && "bg-eco-brown hover:bg-eco-brown hover:text-pri-green",
                                isOpen && "max-mb-nav:w-full",
                                className

                            )}>
                                {e.icon && <e.icon className=""/>}
                                <p className={clsx(
                                    "text-left w-full"
                                )}>{e.text}</p>
                            </Button>
                        </Link>
                    )
                })
            }
        </>
    )
}

type LogoLinkProps = {
    className?:string;
}
export const LogoLink = ({className}:LogoLinkProps) =>{
    return(
        <>
            <Link href="/" className="">
                <Button className={clsx(
                    "flex items-center hover:bg-unset cursor-pointer  space-x-2 shadow-none",
                    className
                )}>
                    <Wheat className="aspect-square w-[2rem]"/>
                    <p className="text-[1.2rem]  font-bold">ECO-FARMS</p>
                </Button>
            </Link>
        </>
    )
}
