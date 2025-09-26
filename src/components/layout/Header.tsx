'use client'

import Link from "next/link";
import { LogoLink } from "../atoms/LogoLink";
import { Button } from "../ui/button";
import {LucideProps, Menu, X } from "lucide-react";
import Favourite from "../icons/Favourite";
import clsx from "clsx";
import { useState } from "react";




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
                        <LogoLink text="ECO-FARMS" href="" />
                        {/* DESKTOP MODE */}
                        <li className={clsx(
                            " flex justify-between items-center  space-x-[2rem]",
                            "max-mb-nav:hidden"
                        )}>
                            <HeaderLink href="" text="Home" className=" bg-eco-brown"/>
                            <HeaderLink href="" text="Products"/>
                            <HeaderLink href="" text="About"/>
                            <HeaderLink href="" text="Contact"/>
                            <HeaderLink href="" text="Favourites" Icon={Favourite}/>
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
                        <HeaderLink href="" text="Home" className="bg-eco-brown" isOpen={isOpen}/>
                        <HeaderLink href="" text="Products" isOpen={isOpen}/>
                        <HeaderLink href="" text="About" isOpen={isOpen}/>
                        <HeaderLink href="" text="Contact" isOpen={isOpen}/>
                        <HeaderLink href="" text="Favourites" Icon={Favourite} isOpen={isOpen}/>    
                    </li>
                </div>
            </nav>
        </>
    )
}

export interface HeaderLinkProps {
    text:string;
    href:string;
    Icon?: React.FC<LucideProps>
    isOpen?:boolean
    className?: string;

}
const HeaderLink = ({text,href,Icon, className="",isOpen} : HeaderLinkProps) =>{
    
    return(
        <>
            
            <Link href={href}>
                <Button className={clsx(
                    "hover:bg-hover-green  cursor-pointer text-[0.875rem] shadow-none space-x-1 px-3 py-2 rounded-md text-sm font-medium ",
                    Icon && "flex items-center",
                    isOpen && "max-mb-nav:w-full",
                    className

                )}>
                    {Icon && <Icon className=""/>}
                    <p className={clsx(
                        "text-left w-full"
                    )}>{text}</p>
                </Button>
            </Link>

        </>
    )
}