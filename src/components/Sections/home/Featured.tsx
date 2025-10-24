'use client'


import { LoadingProds } from "@/components/general/loadingProds";
import { ProdsList } from "@/components/general/PodsList";
import RightArrow from "@/components/icons/RightArrow";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";



import { getProds } from "@/utils/handleProds";
import clsx from "clsx";
import { motion } from "motion/react";
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
      
      
    
      
    return(
        <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={ { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        id="Featured"
          className={clsx(
            "py-24  px-8 w-full mx-auto bg-white text-eco-brown flex flex-col justify-center items-center",
            "max-md:py-16 max-md:px-4",
            "max-sm:px-6")}>
            <p className="text-center text-[1.25rem] font-[800]">Featured Products</p>
            <p className=" text-center text-sec-grey text-[.95rem]">Discover our most popular products trusted by farmers and agricultural businesses.</p>
            
            {loading?  <LoadingProds/> :  <ProdsList prods={prods}/>}
            
            <div className="w-full flex  justify-center">
                <Link href="/Products">
                        <Button className="mt-[2rem] h-[3.75rem] w-[15.2rem] bg-pri-green hover:bg-hover-green cursor-pointer  font-[800] rounded-[.5rem] text-off-white ">
                            <p>View All Product</p>
                            <span>{<RightArrow/>}</span>
                        </Button>
                </Link>
            </div>
        </motion.section>
    )
}