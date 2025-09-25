import RightArrow from "@/components/icons/RightArrow"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

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
                    "text-[3.75rem] font-[800] mb-[1.5rem",
                    "max-sm:text-[2.5rem]"
                )}>{heroContent.title}</h1>
                <p className={clsx(
                    "text-[1.5rem] font-[700] mb-[1rem]",
                )}>{heroContent.catchphrase}</p>
                <p className={clsx(
                    "max-w-[48rem] mx-auto mb-[2rem] text-center text-[1.15rem] font-normal opacity-90",
                    "max-md:text-[1.25rem]"
                )}>{heroContent.desc}</p>
                <Button className=" h-[3.5rem] w-[15rem] bg-eco-yellow hover:bg-hv-eco-yellow text-sec-color text-[1.125rem] font-[800] ">
                    <p>Shop Product</p>
                    <RightArrow/>
                </Button>
            </div>
        </section>
    )
}

