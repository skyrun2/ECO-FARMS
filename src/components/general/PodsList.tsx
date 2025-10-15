'use client'
import clsx from "clsx";
import { useEffect, useState } from "react";
import { ProductCard } from "../atoms/productCard";
import { Product } from "@/lib/types";

type ProdsListProps ={
  useFor:  "products"|"fav";
}
export const  ProdsList = ( {useFor} : ProdsListProps)=>{
 const [prods, setProds] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (useFor=="fav") setProds(data.splice(0,3));
        else setProds(data);

      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  

  return(
    <div
     className={clsx(
      // "mt-[2rem] flex flex-wrap items-center justify-center gap-[2rem]"
      " mt-[2rem] w-full grid [grid-template-columns:repeat(auto-fit,minmax(12rem,1fr))] gap-[1.5rem] justify-start items-start box-border",
      "max-sm-sm:[grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))]",
      "max-[24.65rem]:[grid-template-columns:repeat(2,minmax(10rem,1fr))] gap-[0rem] place-items-start"
      // "max-[28.75rem]:"
      // "prods-list bg-fuchsia"
  )}
  // className="prods-list"
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
