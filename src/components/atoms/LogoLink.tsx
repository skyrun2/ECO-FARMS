import Link from "next/link"
import Logo from "../icons/logo"
import { Button } from "../ui/button"
import { HeaderLinkProps } from "../layout/Header"
import {Wheat} from "../icons/index"
import clsx from "clsx"



export const LogoLink = ({text,href,className=""}:HeaderLinkProps) =>{
    return(
        <>
            <Link href={href} className="">
                <Button className={clsx(
                    "flex items-center hover:bg-unset cursor-pointer  space-x-2 shadow-none",
                    className
                )}>
                    <Wheat className="aspect-square w-[2rem]"/>
                    <p className="text-[1.2rem]  font-bold">{text}</p>
                </Button>
            </Link>
        </>
    )
}

