'use client'
import clsx from "clsx";
import { ProductCard } from "../atoms/productCard";
import { Product } from "@/lib/types";




type ProdsListProps ={
  prods: Product[];
}
export const  ProdsList = ( {prods} : ProdsListProps)=>{
  
  
  
  return(
    <div
     className={clsx(      
      " mt-[2rem] w-full flex flex-wrap gap-4 ",
      "max-md:items-center max-md:justify-center ",
      // "max-sm:flex max-sm:flex-cols",      
  )}
  >
      {prods.map((prod,i)=>{
        return(
          <ProductCard key={i} prod={prod} />
        )
      })}
    </div>
  )
}
