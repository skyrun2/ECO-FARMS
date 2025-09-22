import Link from "next/link"
import Logo from "../icons/logo"
import { Button } from "../ui/button"
import { HeaderLinkProps } from "../layout/Header"



export const LogoLink = ({text,href}:HeaderLinkProps) =>{
    return(
        <>
            <Link href={href}>
                <Button className="flex items-center hover:bg-unset cursor-pointer">
                    <Logo/>
                    <p className="text-[1.2rem] font-bold">{text}</p>
                </Button>
            </Link>
        </>
    )
}

