'use client'
import clsx from "clsx";
import { useEffect, useState } from "react";
import { ProductCard } from "../atoms/productCard";
import { Product } from "@/lib/types";




type ProdsListProps ={
  prods: Product[];
}
export const  ProdsList = ( {prods} : ProdsListProps)=>{
//  const [prods, setProds] = useState([]);

//   useEffect(() => {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((data) => {                    
//         if(useFor =="fav") setProds(data.data.slice(0,4));
//         else setProds(data.data);
//       })
//       .catch((err) => console.error("Error fetching products:", err));
//       console.log('pl');
          
      
//   }, []);
  
  
  
  return(
    <div
     className={clsx(      
      " mt-[2rem] w-full grid [grid-template-columns:repeat(auto-fit,minmax(12rem,1fr))] gap-[1.5rem] justify-start items-start box-border",
      "max-sm-sm:[grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))]",
      "max-[24.65rem]:[grid-template-columns:repeat(2,minmax(10rem,1fr))] gap-[0rem] place-items-start"      
  )}
  >
      {prods.map((prod,i)=>{
        return(
          <ProductCard key={i} prod={prod} className={clsx(
            " w-full h-fit",
            "max-sm-sm:w-[13rem]",
            "max-[28.75rem]:w-[11rem]",
            "max-[24.65rem]:w-[9rem]"
            // "prod"
          )}/>
        )
      })}
    </div>
  )
}
