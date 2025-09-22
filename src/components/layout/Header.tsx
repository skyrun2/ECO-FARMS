'use client'

import Link from "next/link";
import { LogoLink } from "../atoms/LogoLink";
import { Button } from "../ui/button";
import { LucideProps } from "lucide-react";
import Favourite from "../icons/Favourite";



export {Header};

const Header = () =>{
    return (
        <>
            <header className="pl-[.5rem] pr-[3rem] bg-pri-green h-[4rem] w-[100%] flex items-center justify-between ">
                <LogoLink text="ECO-FARMS" href=""/>
                <li className=" flex justify-between gap-[2rem] items-center">
                    <HeaderLink href="" text="Home"/>
                    <HeaderLink href="" text="Products"/>
                    <HeaderLink href="" text="About"/>
                    <HeaderLink href="" text="Contact"/>
                    <HeaderLink href="" text="Favourites" Icon={Favourite}/>
                    
                </li>
            </header>
        </>
    )
}

export interface HeaderLinkProps {
    text:string;
    href:string;
    Icon?: React.FC<LucideProps>

}
const HeaderLink = ({text,href,Icon} : HeaderLinkProps) =>{
    
    return(
        <>
            
            <Link href={href}>
                <Button className=" hover:bg-hover-green cursor-pointer">
                    {Icon && <Icon/>}
                    <p>{text}</p>
                </Button>
            </Link>

        </>
    )
}