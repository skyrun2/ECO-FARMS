"use client";


import { Card } from "../ui/card";
import clsx from "clsx";
import Image from "next/image";
import { iClick, Product } from "@/lib/types";
import { useUserStore } from "@/lib/useUserStore";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useWhatsApp } from "@/hooks/useWhatsapp";

// export const FeaturedProduct = ({productCard}:FeaturedProductProps) =>{
type ProductCardProps = {
    prod : Product;
    className?: string;
}
type HandleFav ={
    prod: Product;    
    e:iClick;

}


export const ProductCard = ({prod,className}:ProductCardProps) =>{
    const makeFav = useUserStore((state)=>state.actions.makeFav);
    const removeFav = useUserStore((state)=>state.actions.removeFav);
    const chat = useWhatsApp("message");
    
    const favProds = useUserStore((state)=>state.favProds);
    const [isFav,setFav] = useState(false);        
    
    const handleFav = ({prod}:HandleFav)=>{
        if (isFav) {
            removeFav(prod);
            setFav(false);
        }
        else{
            makeFav(prod);
            setFav(true);
        }
    }


    useEffect(()=>{            
        if(favProds.length){
            favProds.forEach(e=> e.id == prod.id ? setFav(true) :null)
        }
    },[])
    
    return(
        <Card  className={clsx(
            "pt-0 pb-3 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ",
            "w-[15.125rem] shrink-0",
            "max-sm:w-[20rem] gap-4 ",
            // "max-sm-sm:h-fit max-sm-sm:w-[6.7rem]",
            className,
            
        )}>
            <div className="relative w-full aspect-[1.375/1] ">
            <Image src={prod.image} alt="" fill  className="w-full h-full object-cover" sizes="100%"/>
            <span 
            className="absolute top-[0.75rem] right-[0.75rem]  rounded-[100%] aspect-square w-[2.25rem] bg-light text-eco-grey hover:text-hover-green  flex items-center justify-center cursor-pointer"
            onClick={(e)=>handleFav({prod,e})}
            >        
                <Heart className={isFav? "fill-pri-green text-pri-green":""}/>
            </span>
            <p className="absolute top-[0.75rem] left-[0.5rem] px-[.5rem] text-lg-desc bg-off-white text-gray-600 rounded-full text-nowrap text-ellipsis">{prod.tag }</p>
            </div >
            <div className={clsx(
                " px-[.5rem] ",
                "max-sm:px-[0.5rem]"
            )}> 
            <p className={clsx(
                "text-left text-eco-brown font-[700] text-lg-desc  ",
                "whitespace-nowrap overflow-hidden text-ellipsis [mask-image:linear-gradient(to_right,black_80%,transparent)]"

            )}>{prod.title}</p>            
            <p className="text-pri-green font-[700] text-sm-desc text-left ">${prod.price}</p>                
            
            </div>
            <Button className={clsx(
                "mx-auto h-[2rem] w-[90%] bg-pri-green rounded-md",
                "hover:bg-white hover:text-pri-green hover:border-2 hover:border-pri-green"
            )}
            onClick={()=>chat(`Hi! I\'m interested in the ${prod.title} for ${prod.price}. Is it still available?`)}>
                <p>Message on Whatsapp</p>
            </Button>
        </Card>
    )
}