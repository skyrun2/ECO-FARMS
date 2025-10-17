'use client'

import Eggs from "@/components/icons/Egg";
import Fishs from "@/components/icons/Fish";
import Steak from "@/components/icons/Steak";

import { Cat, Categories } from "@/components/Sections/home/Categories";
import { FeaturedProduct, product } from "@/components/Sections/home/Featured";
import { Hero } from "@/components/Sections/home/Hero";
import { Wheat } from "lucide-react";
import { useEffect } from "react";



const catsContent: Cat[] = [
    {
    title: "Livestock Feeds",
    desc:"Premium nutrition for your livestock",
    icon: <Wheat/>
  },
  {
    title: "Fresh Livestock",
    desc: "Healthy livestock for your farm",
    icon:<Steak/>
    
  },
  {
    title: "Frozen Meats",
    desc: "Quality frozen meat products",
    icon:<Eggs/>
  },
  {
    title: "Fish & Seafood",
    desc: "Fresh catch from the sea",
    icon:<Fishs/>
    
  },
]
export default function Home() {
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
 