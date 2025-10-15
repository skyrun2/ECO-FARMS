"use client";


import { Card } from "../ui/card";
import clsx from "clsx";
import Favourite from "../icons/Favourite";
import Image from "next/image";
import { Product } from "@/lib/types";

// export const FeaturedProduct = ({productCard}:FeaturedProductProps) =>{
type ProductCardProps = {
    prod : Product;
    className?: string;
}
export const ProductCard = ({prod,className}:ProductCardProps) =>{
    return(
        <Card  className={clsx(
            "pt-0 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ",
            "max-big-lg:w-[13.125rem]",
            // "max-sm-sm:h-fit max-sm-sm:w-[6.7rem]",
            className,
            
        )}>
            <div className="relative w-full aspect-[1.375/1] ">
            <Image src={prod.image} alt="" fill  className="w-full h-full object-cover"/>
            <span 
            className=" absolute top-[0.75rem] right-[0.75rem]  rounded-[100%] aspect-square w-[2.25rem] bg-light text-eco-grey hover:text-hover-green  flex items-center justify-center cursor-pointer">
                <Favourite/>
            </span>
            </div >
            <div className={clsx(
                "py-[0] px-[1.5rem] ",
                "max-sm:px-[0.5rem]"
            )}> 
            <p className={clsx(
                "text-left text-eco-brown font-[800] text-[1rem]  ",
                "whitespace-nowrap overflow-hidden text-ellipsis [mask-image:linear-gradient(to_right,black_80%,transparent)]"

            )}>{prod.title}</p>
            <div className={clsx(
                " w-full flex items-baseline justify-between",
                "max-sm-sm:flex-col max-sm-sm:gap-[0.5rem] max-sm-sm:pb-[0.6rem]"
            )}>
                <p className="text-pri-green font-[800] text-[1.2rem] ">${prod.price}</p>
                <p className="px-[.5rem] text-[0.875rem] bg-off-white text-tetirary-grey rounded-full text-nowrap text-ellipsis">{prod.tag }</p>
            </div>
            </div>
        </Card>
    )
}