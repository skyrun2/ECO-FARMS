
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";




export type Cat = {
    title: string;    
    desc: string;    
    icon: LucideIcon;
}

export type CategoriesProp = {
    items:Cat[]
}
export const Categories = ({items}:CategoriesProp)=>{
    
    return(        
        <motion.section id="cats"
        initial={{ opacity: 0, y: 40 }}
        animate={ { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={clsx(
                    "py-24  px-4 w-full mx-auto bg-white text-eco-brown flex flex-col justify-center items-center",
                    "max-md:py-16 max-md:px-4",
                    "max-sm:px-4")}>
            <h1 className={clsx(
                "font-[700]  text-center text-eco-brown text-lg-head",
                "max-md:text-sm-head"
            )}>Our Product Categories</h1>
            <p className={clsx(
                "w-full mx-auto  text-center text-sec-grey text-lg-desc",
                "max-md:text-sm-desc"
            )}>From livestock feeds to fresh seafood, we provide everything you need for successful agricultural operations.</p>
            <div className={clsx(
                            "pt-[3rem]  grid  grid-cols-4 gap-[2rem] mb-12 ", 
                            "max-lg:grid-cols-2   max-blg:w-[35rem] ",                            
                            "max-mid-mg:flex flex-col ",  
                            // "  max-sm-sm:w-full max-sm-sm:px-[2rem] max-sm-sm:pb-[2rem] max-sm-sm:[grid-template-columns:repeat(4,minmax(12.125rem))] max-sm-sm:auto-cols-[12.125rem] ",
                            
                            
                        )}>
            {items.map((e,i)=>{
                return(
                 <Card key={i} className={clsx(
                    " px-4 rounded-xl shadow-lg   h-[15.125rem]  flex flex-col justify-center items-center",
                    "max-md:w-[12rem]",
                    "max-sm:w-[15rem]",
                    // " max-md:w-[20rem]"
                 )}>
                    <span className={clsx("rounded-[100%] aspect-square w-[4rem] flex items-center justify-center text-light",
                            i%2 ? "bg-eco-brown"  : "bg-pri-green",
                    )}>
                       <e.icon/>
                    </span>
                    <CardTitle className="text-lg-head text-eco-brown  font-bold">{e.title}</CardTitle>
                    <CardDescription className="w-full text-lg-desc text-sec-grey text-center  font-normal">{e.desc}</CardDescription>
                 </Card>   
                )
            })}
            </div>
        </motion.section>
    )
}