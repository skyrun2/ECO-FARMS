import Eggs from "@/components/icons/Egg";
import Fishs from "@/components/icons/Fish";
import Steak from "@/components/icons/Steak";
import { Card } from "@/components/ui/card"
import clsx from "clsx";
import { Wheat } from "lucide-react";
import { ReactNode } from "react";


export type Cat = {
    title: string;    
    desc: string;    
    icon: ReactNode;
}

export type CategoriesProp = {
    items:Cat[]
}
export const Categories = ({items}:CategoriesProp)=>{
    return(
        <section id="cats" className={clsx(
                    "py-24  px-8 max-w-7xl mx-auto bg-light text-eco-brown flex flex-col justify-center items-center",
                    "max-md:py-16 max-md:px-4",
                    "max-sm:px-6")}>
            <h1 className=" font-[800] text-[1.875rem] text-center text-sec-color ">Our Product Categories</h1>
            <p className="max-w-[48rem] mx-auto  text-center text-sec-grey text-[1.125rem]">From livestock feeds to fresh seafood, we provide everything you need for successful agricultural operations.</p>
            <div className={clsx(
                            "pt-[3rem]  grid  grid-cols-4 gap-[2rem] mb-12 ", 
                            "max-big-lg:grid-cols-2  max-big-lg:place-items-center max-big-lg:w-[35rem] ",
                            "max-mid-mg:grid  max-mid-mg:gap-8 max-mid-mg:[grid-template-columns:repeat(4,minmax(16.125rem,1fr))] max-mid-mg:overflow-scroll",  
                            "  max-sm-sm:w-full max-sm-sm:px-[2rem] max-sm-sm:pb-[2rem] max-sm-sm:[grid-template-columns:repeat(4,minmax(12.125rem))] max-sm-sm:auto-cols-[12.125rem] max-sm-sm:overflow-x-auto max-sm-sm:gap-2rem",
                            
                            
                        )}>
            {items.map((e,i)=>{
                return(
                 <Card key={i} className=" p-[2rem] h-[15.125rem] flex flex-col justify-center items-center text-[1.25rem] text-eco-brown font-[800]">
                    <span className={clsx("rounded-[100%] aspect-square w-[4rem] flex items-center justify-center text-light",
                            i%2 ? "bg-eco-brown"  : "bg-pri-green",
                    )}>
                       {e.icon} 
                    </span>
                    <p>{e.title}</p>
                    <p className="text-sec-grey text-[1rem] font-normal">{e.desc}</p>
                 </Card>   
                )
            })}
            </div>
        </section>
    )
}