import RightArrow from "@/components/icons/RightArrow"
import { Button } from "@/components/ui/button"
import clsx from "clsx"
import Link from "next/link"

const heroContent = {
    title:"ECO FARMS",
    catchphrase:"Your Trusted Agricultural Partner",
    desc:"Premium livestock feeds, fresh meat, and quality seafood for your agricultural needs."
}


export const Hero = ()=>{
    return(
        <section id="#hero" 
        className="relative pt-[8rem] bg-hero w-full h-[33.6rem]  text-light"
        >
            <div className={clsx(
                "max-w-[80rem] mx-auto px-8 text-center",
                "max-md:px-4",
                "max-sm:px-6"
                )}>
                <h1 className={clsx(
                    "text-4xl font-[800] mb-[1.5rem]",
                    "max-md:text-4xl"
                )}>{heroContent.title}</h1>
                <p className={clsx(
                    "text-2xl font-[700] mb-[1rem]",
                    "max-md:text-sm-desc"
                )}>{heroContent.catchphrase}</p>
                <p className={clsx(
                    "max-w-[48rem] mx-auto mb-[2rem] text-center text-lg-desc font-normal opacity-90",
                    "max-md:text-sm-desc"
                )}>{heroContent.desc}</p>
                
                    <Link href="/Products" className=" ">
                        <Button className={clsx(
                            " h-[3.5rem] w-[15rem] bg-eco-yellow hover:bg-hv-eco-yellow text-sec-color text-lg-desc font-[800] cursor-pointer",
                            "max-sm:text-sm-desc"
                        )} >
                            <p>Shop Product</p>
                            <RightArrow/>
                        </Button>
                    </Link>
                    
                
            </div>
        </section>
    )
}

