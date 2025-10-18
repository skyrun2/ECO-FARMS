'use client'
import { ProductCard } from "@/components/atoms/productCard";
import { Button } from "@/components/ui/button"
import { useUserStore } from "@/lib/useUserStore";

import clsx from "clsx"
import { Heart, ShoppingBag } from "lucide-react"
import Link from "next/link";


export default function Favorite(){
    
    const favProds = useUserStore((state)=>state.favProds);
    
    return(
        <section className={clsx(
            " py-[3rem] mx-auto  px-8 w-full  ",
            "max-md:px-4, max-md:py-16",
            "max-sm:px-6"
        )}>
            <div className="mb-16 text-center">
                <div className="mb-4 flex items-center justify-center ">
                        <span className="w-[2rem] text-pri-green "><Heart></Heart></span>
                        <h2 className={clsx(
                            "text-lg-head font-extrabold text-eco-brown ",                            
                        )}>Your Favorites Here</h2>
                </div>
                <p className="mx-auto max-w-3xl text-sm-desc text-gray-600">Keep track of products you&apos;re interested in. Save items to easily find them later.</p>                
            </div>
            {
                favProds.length ? 
                    <div className=" mt-[2rem] w-full flex flex-wrap gap-4  ">
                        {favProds.map(e=>{
                        return(
                            <ProductCard key={e.id} prod={e}/>                            
                        )
                    })}
                    </div>
                    
                : <EmptyState/>
            }
            
            

        </section>
    )
}

const EmptyState = () =>{
    return(
        <div className="py-16 text-center">
            <span className="mb-6 mx-auto w-[6rem]  aspect-square flex items-center justify-center"> <Heart className="w-[3rem] h-[3rem] bg-gray-100 text-gray-400 rounded-full "/></span>
            <h2 className="mb-4 text-lg-head font-bold text-eco-brown ">No Favorites</h2>
            <p className="mb-8 max-w-md mx-auto text-sm-desc  text-gray-600 ">Start browsing our products and click the heart icon to save your favorites here.</p>        
            <Link href="/Products">
                <Button className="px-8 py-4 h-[3.75rem] inline-flex items-center justify-center gap-2 bg-pri-green text-sm-desc text-white  rounded-lg font-bold   hover:bg-hover-green cursor-pointer"> 
                    <ShoppingBag className="w-5 aspect-square"/>
                    <p>Browse Products</p>
                </Button>            
            </Link>
        </div>
    )
}