'use client'


import {  Categories } from "@/components/Sections/home/Categories";
import { FeaturedProduct,  } from "@/components/Sections/home/Featured";
import { Hero } from "@/components/Sections/home/Hero";
import { ECOFARMS_DISPLAY_CATEGORIES } from "@/lib/constants";
import { useEffect } from "react";



export default function Home() {
  const catsContent = ECOFARMS_DISPLAY_CATEGORIES
  useEffect(()=>{
    console.log("home");
    
  },[])
  
  return (
    <div className="overflow-hidden">      
        <Hero/>
        <Categories items={catsContent}/>
        <FeaturedProduct />
     </div>
  );
}
 