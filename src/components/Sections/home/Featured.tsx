import Favourite from "@/components/icons/Favourite";
import RightArrow from "@/components/icons/RightArrow";
import { Card } from "@/components/ui/card";
import clsx from "clsx";
import Image from "next/image";

export type product = {
    title:string;
    price:number;
    image:string;
    tag:string;
    isFavourite:boolean;

}

const demoFeatured : product[]= [
    {
        title:"Premium cattle Feed",
        price:45.99,
        image:"https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400",
        tag: "Livestock Feeds",
        isFavourite:false,
    },
    {
        title:"Fresh Angus Beef",
        price:189.99,
        image:"https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400",
        tag: "Livestock Feeds",
        isFavourite:false,
    },
    {
        title:"Atlantic Salmon",
        price:24.99,
        image:"https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=400",
        tag: "Livestock Feeds",
        isFavourite:false,
    },
    {
        title:"Free-Range Chickens",
        price:89.99,
        image:"https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=400",
        tag: "Livestock Feeds",
        isFavourite:false,
    },
]
export type FeaturedProductProps = {
    productCard:product[];
}

export const FeaturedProduct = ({productCard}:FeaturedProductProps) =>{
    return(
        <section id="Featured"  className={clsx(
            "py-24  px-8 max-w-7xl mx-auto bg-light text-eco-brown flex flex-col justify-center items-center",
            "max-md:py-16 max-md:px-4",
            "max-sm:px-6")}>
            <p className="text-center text-[2.25rem] font-[800]">Featured Products</p>
            <p className=" text-center text-sec-grey text-[1.125rem]">Discover our most popular products trusted by farmers and agricultural businesses.</p>
            <div className={clsx(
                "pt-[3rem]  grid  grid-cols-4 gap-[2rem] mb-12 scroll-eco-green",    
                "max-big-lg:grid-cols-2  max-big-lg:place-items-center max-big-lg:w-[35rem] ",
                "max-mid-mg:grid  max-mid-mg:gap-8 max-mid-mg:[grid-template-columns:repeat(4,minmax(16.125rem,1fr))] max-mid-mg:overflow-scroll",
                "  max-sm-sm:w-full max-sm-sm:px-[2rem] max-sm-sm:pb-[2rem] max-sm-sm:[grid-template-columns:repeat(4,minmax(12.125rem))] max-sm-sm:auto-cols-[12.125rem] max-sm-sm:overflow-x-auto max-sm-sm:gap-2rem",
                // "max-sm-sm:flex max-sm-sm:grid-cols-none"
                
            )}>
                {productCard.map((e,i)=>{                    
                    return(
                        <Card key={i} className={clsx(
                            "pt-0 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                            "max-big-lg:w-[16.125rem]",                                                        
                            // "max-sm-sm:w-12.125rem "
                        )}>
                            <div className="relative w-full aspect-[1.375/1] ">
                            <Image src={e.image} alt="" fill  className="w-full h-full object-cover"/>
                            <span 
                            className=" absolute top-[0.75rem] right-[0.75rem]  rounded-[100%] aspect-square w-[2.25rem] bg-light text-eco-grey hover:text-hover-green  flex items-center justify-center cursor-pointer">
                                <Favourite />
                            </span>
                            </div >
                            <div className="py-[0] px-[1.5rem] ">
                            <p className="text-eco-brown font-[800] text-[1.125rem]">{e.title}</p>
                            <div className=" w-full flex items-baseline justify-between">
                                <p className="text-pri-green font-[800] text-[1.5rem] ">${e.price}</p>
                                <p className="px-[.5rem] text-[0.875rem] bg-off-white text-tetirary-grey rounded-full">{e.tag }</p>
                            </div>
                            </div>
                        </Card>
                    )
                })}                
            </div>
            <div className="w-full flex  justify-center">
                <div className="mt-[2rem] h-[3.75rem] w-[15.2rem] bg-pri-green text-[1.125rem] font-[800] rounded-[.5rem] text-off-white">
                        <button className="w-full h-full flex items-center justify-center gap-[.5rem]">
                            <p>View All Product</p>
                            <span>{<RightArrow/>}</span>
                        </button>
                </div>

            </div>
        </section>
    )
}