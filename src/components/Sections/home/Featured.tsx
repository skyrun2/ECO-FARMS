import Favourite from "@/components/icons/Favourite";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export type product = {
    title:string;
    price:number;
    image:string;
    isFavourite:boolean;

}

const demoFeatured : product[]= [
    {
        title:"Premium cattle Feed",
        price:45.99,
        image:"https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400",
        isFavourite:false,
    },
    {
        title:"Fresh Angus Beef",
        price:189.99,
        image:"https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400",
        isFavourite:false,
    },
    {
        title:"Atlantic Salmon",
        price:24.99,
        image:"https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=400",
        isFavourite:false,
    },
    {
        title:"Free-Range Chickens",
        price:89.99,
        image:"https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=400",
        isFavourite:false,
    },


]
export type FeaturedProductProps = {
    productCard:product[];
}

export const FeaturedProduct = ({productCard}:FeaturedProductProps) =>{
    return(
        <section id="Featured"  className="w-full py-[4rem] bg-light text-sec-color flex flex-col gap-[2.5rem] justify-center">
            <p className="text-center text-[2.25rem] font-[800]">Featured Products</p>
            <div className=" w-full flex items-center justify-around">
                {productCard.map((e,i)=>{
                    return(
                        <Card key={i} className="pt-0 overflow-hidden flex flex-col  justify-center">
                            <div className="relative  h-[12rem] aspect-[1.375/1]">
                            <Image src={e.image} alt="" fill  className=""/>
                            <span 
                            className=" absolute top-[0.75rem] right-[0.75rem]  rounded-[100%] aspect-square w-[2.25rem] bg-light text-eco-grey hover:text-hover-green  flex items-center justify-center cursor-pointer">
                                <Favourite />
                            </span>
                            </div >
                            <div className="pl-[1.5rem] ">
                            <p className="text-eco-brown font-[800] text-[1.125rem]">{e.title}</p>
                            <p className=" text-pri-green font-[800] text-[1.5rem] ">${e.price}</p>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}