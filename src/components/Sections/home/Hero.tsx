import RightArrow from "@/components/icons/RightArrow"
import { Button } from "@/components/ui/button"

const heroContent = {
    title:"ECO FARMS",
    catchphrase:"Your Trusted Agricultural Partner",
    desc:"Premium livestock feeds, fresh meat, and quality seafood for your agricultural needs."
}


export const Hero = ()=>{
    return(
        <section id="#hero" 
        className="pt-[8rem] bg-hero w-full h-[45rem] flex flex-col justify-top gap-[2rem] items-center font-[800] text-light"
        >
            <h1 className="   text-[3.75rem] ">{heroContent.title}</h1>
            <p className="text-[1.5rem]">{heroContent.catchphrase}</p>
            <p className="text-[1.15rem] font-[600]">{heroContent.desc}</p>
            <Button className=" h-[3rem] w-[12rem] bg-eco-yellow hover:bg-hv-eco-yellow text-sec-color text-[1.125rem] font-[800] ">
                <p>Shop Product</p>
                <RightArrow/>
            </Button>
        </section>
    )
}

