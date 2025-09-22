import Eggs from "@/components/icons/Egg";
import Fishs from "@/components/icons/Fish";
import Steak from "@/components/icons/Steak";
import { Card } from "@/components/ui/card"
import clsx from "clsx";
import { Wheat } from "lucide-react";
import { ReactNode } from "react";


export type Cat = {
    title: string;
    icon: ReactNode;
}

export type CategoriesProp = {
    items:Cat[]
}
export const Categories = ({items}:CategoriesProp)=>{
    return(
        <section id="cats" className="w-full py-[4rem] bg-light text-sec-color flex flex-col justify-center">
            <h1 className=" font-[800] text-[1.875rem] text-center text-sec-color">Our Product Categories</h1>
            <div className=" w-full flex items-center justify-around">
            {items.map((e,i)=>{
                return(
                 <Card key={i} className="h-[11.25rem] w-[16.5rem] flex flex-col justify-center items-center text-[1.25rem] text-eco-brown font-[800]">
                    <span className={clsx("rounded-[100%] aspect-square w-[4rem] flex items-center justify-center text-light",
                            i%2 ? "bg-eco-brown"  : "bg-pri-green",
                    )}>
                       {e.icon} 
                    </span>
                    <p>{e.title}</p>
                 </Card>   
                )
            })}
            </div>
        </section>
    )
}