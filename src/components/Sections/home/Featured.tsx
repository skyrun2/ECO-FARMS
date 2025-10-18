'use client'


import { ProdsList } from "@/components/general/PodsList";
import RightArrow from "@/components/icons/RightArrow";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";


import { useUserStore } from "@/lib/useUserStore";
import { getProds } from "@/utils/handleProds";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export type product = {
    title:string;
    price:number;
    image:string;
    tag:string;
    

}

export type FeaturedProductProps = {
    products:product[];
}

export  const FeaturedProduct =  () =>{        
    const [prods,setProds] = useState<Product[]>([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(()=>{
        getProds()
        .then((data)=>setProds(data.splice(0,4)))
        .catch((err)=> console.error(err))
        .finally(()=>setLoading(false));
      },[])
      if (loading) return <p>loading...</p>;
      
    
      
    return(
        <section id="Featured"  className={clsx(
            "py-24  px-8 w-full mx-auto bg-white text-eco-brown flex flex-col justify-center items-center",
            "max-md:py-16 max-md:px-4",
            "max-sm:px-6")}>
            <p className="text-center text-[1.25rem] font-[800]">Featured Products</p>
            <p className=" text-center text-sec-grey text-[.95rem]">Discover our most popular products trusted by farmers and agricultural businesses.</p>
            <ProdsList prods={prods}/>
            <div className="w-full flex  justify-center">
                <Link href="/Products">
                        <Button className="mt-[2rem] h-[3.75rem] w-[15.2rem] bg-pri-green hover:bg-hover-green cursor-pointer  font-[800] rounded-[.5rem] text-off-white ">
                            <p>View All Product</p>
                            <span>{<RightArrow/>}</span>
                        </Button>
                </Link>
            </div>
        </section>
    )
}