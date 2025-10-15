'use client'

import Eggs from "@/components/icons/Egg";
import Fishs from "@/components/icons/Fish";
import Steak from "@/components/icons/Steak";

import { Cat, Categories } from "@/components/Sections/home/Categories";
import { FeaturedProduct, product } from "@/components/Sections/home/Featured";
import { Hero } from "@/components/Sections/home/Hero";
import { Wheat } from "lucide-react";



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
const demoFeatured : product[]= [
    {
        title:"Premium cattle Feed",
        price:45.99,
        image:"https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400",
        tag: "Livestock Feeds",
        
    },
    {
        title:"Fresh Angus Beef",
        price:189.99,
        image:"https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400",
        tag: "Livestock Feeds",
        
    },
    {
        title:"Atlantic Salmon",
        price:24.99,
        image:"https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=400",
        tag: "Livestock Feeds",
        
    },
    {
        title:"Free-Range Chickens",
        price:89.99,
        image:"https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=400",
        tag: "Livestock Feeds",
        
    },
]
export default function Home() {
  console.log("home");
  
  return (
    <div className="overflow-hidden">      
        <Hero/>
        <Categories items={catsContent}/>
        <FeaturedProduct productCard={demoFeatured}/>
     </div>
  );
}
 