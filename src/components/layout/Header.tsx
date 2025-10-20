'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import {Heart, Menu, Wheat, X } from "lucide-react";
import clsx from "clsx";
import { SVGProps, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/lib/useUserStore";


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
    
]

export {Header};

const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [favCount, setFavCount] = useState<number>(0);
    const pathname = usePathname();
    const favProds = useUserStore((state)=>state.favProds)


    useEffect(()=>{
        setFavCount(favProds.length);
    },[favProds])
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
                        <div className=" w-fit  flex items-center justify-between gap-8">
                            {/* DESKTOP MODE */}
                            <li className={clsx(
                                " flex justify-between items-center  space-x-[2rem]",
                                "max-mb-nav:hidden"
                            )}>
                                <HeaderLinks/>
                            
                            </li>

                            {/* FAVORITES LINK*/}
                            <Link href="Favorites" className={clsx(
                                "relative  w-[1.5rem] aspect-square cursor-pointer text-[0.875rem] shadow-none  rounded-md text-sm font-medium flex items-center justify-center",                                
                                pathname !=="/Favorites" && "hover:bg-hover-green"
                            
                            )}>
                                { favCount?
                                    <p className="absolute top-[-90%] translate-y-[50%] right-0 text-white font-bold text-sm-desc ">{favCount}</p>
                                    : null
                                }
                                <Heart className={clsx(
                                    "  aspect-square",
                                    pathname=="/Favorites" ? " fill-eco-brown text-eco-brown" : " text-white"
                                )} height="1.2rem"  />
                            </Link>

                            {/* CTRL BTN FOR MOBILE MODE */}
                            <Button className={clsx(
                                "hidden",
                                "  p-0  max-mb-nav:w-[3rem] aspect-square max-mb-nav:flex items-center justify-center hover:bg-transparent  hover:text-eco-brown",
                            )} onClick={()=>setIsOpen(!isOpen)}>
                                {isOpen
                                ? <X />
                                : <Menu />  }
                            </Button>

                            
                        </div>
                    </div>
                        {/* MOBILE MODE */}
                    <div className={isOpen?"panel panel-expand":"panel panel-collapse overflow-hidden"}>
                        <ul className={clsx(
                            " pt-0  bg-pri-green grid  grid-cols-1",
                            "panel-expand__content "
                        )}>
                            <HeaderLinks  isOpen="" className="w-fit"/>
                        </ul>
                    </div>
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
    return(
        <>
            {
                navLinks.map((e,i)=>{
                    const href = "/"+e.link;
                    let isCurrPage = false;
                    isCurrPage = pathname == href ? true :false;                    
                    return(
                        <Link key={i} href={href}>
                            <Button className={clsx(
                                "hover:text-eco-brown hover:bg-transparent  cursor-pointer text-sm-desc text-white shadow-none space-x-1 px-3 py-2 rounded-md  font-medium ",
                                e.icon && "flex items-center",
                                isCurrPage && "text-eco-brown",
                                isOpen && "max-mb-nav:w-full",
                                className

                            )}>                            
                                <p className="text-sm-desc">{e.text}</p>                                                                
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
                    <p className={clsx(
                        "text-lg-desc  font-bold",
                        "max-sm:text-sm-desc"
                    )}>ECO-FARMS</p>
                </Button>
            </Link>
        </>
    )
}
