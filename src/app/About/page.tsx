'use client'

import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Award, Badge, Leaf, LucideIcon, LucideProps, Target, Users } from "lucide-react"
import Image from "next/image";
import { ComponentType, ReactNode, SVGProps } from "react";
export type Value = {
    title:string
    desc:string;    
    icon:LucideIcon;
}
export type AboutData = {
    desc:string;
    story:string;
    mission:string;
    values: Value[];
}
export const aboutData : AboutData= {
    desc:"Your trusted partner in agriculture, providing premium livestock feeds, fresh meat, and quality seafood to farming communities across the region.",
    story:"Founded with a deep passion for agriculture, AgroFresh began as a small family business dedicated to supporting local farmers with quality products and reliable service. Over the years, we've grown into a trusted name in the agricultural community.\n\nOur journey started when we recognized the need for a reliable supplier that truly understood the challenges facing modern farmers. We committed ourselves to sourcing the finest livestock feeds, freshest meats, and highest quality seafood products.\n\nToday, we serve hundreds of farms and agricultural businesses, maintaining the same personal touch and commitment to quality that defined our early days. Our success is measured by the success of our customers and the thriving agricultural community we serve.",
    mission:"To empower agricultural communities by providing premium quality products, exceptional service, and expert knowledge that helps farmers and businesses thrive in today's competitive marketplace.",
    values:[
        {
            title:"Quality First",
            desc:"We source only the highest quality products for our customers, ensuring freshness and nutritional value.",
            icon:Leaf
        },
        {
            title:"Community Focus",
            desc:"Supporting local farmers and agricultural communities is at the heart of everything we do.",            
            icon:Users
        },
        {
            title:"Trusted Expertise",
            desc:"With years of experience in agriculture, we understand the needs of modern farming operations.",
            icon:Award
        },
        {
            title:"Sustainable Practices",
            desc:"We promote environmentally responsible farming practices and sustainable agriculture.",
            icon:Target
        },
        
    ]


}


export default function About(){
    return(
        <section>
            <div>
                <h1 className={clsx(
                    "mb-[1rem] text-[2.25rem] font-[800] text-eco-brown",
                    "max-md:text-[1.87rem]"
                )}>About Eco-Farm</h1>
                <p className="max-w-[48rem] mx-auto text-[1.125rem] text-gray-600">{aboutData.desc}</p>
            </div>
            <div className="space-y-6">
                <div className="a-left">
                    <h2 className={clsx(
                        "text-1.875 font-bold text-eco-brown",
                        "max-md:text-1.5rem"
                    )}>Our Story</h2>
                    <p className={clsx(
                        "space-y-4 text-gray-600 leading-relaxed "
                    )}>{aboutData.story}</p>
                </div>
                <div className="relative min-h-[25rem] rounded-[0.25rem] shadow-lg bg-cover bg-center">
                    <Image className="w-full h-full"
                        fill
                        src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                </div>
            </div>
            <div>
                <h2>Our Mission</h2>
                <p>{aboutData.mission}</p>
            </div>
            <div>
                <h2>Our Values</h2>
                <p>These core values guide every decision we make and every relationship we build.</p>                
                <Values values={aboutData.values}/>
            </div>
            <div>
                <h2>Ready to Partner With Us?</h2>
                <p>Join the growing community of successful farmers and agricultural businesses who trust AgroFresh for their premium product needs.</p>
                <div>
                    <Button>Browse Products</Button>
                    <Button>Contact Us</Button>
                </div>
            </div>
        </section>
    )
}
export type ValuesProps ={
    values:Value[]
}
const Values = ({values}:ValuesProps) =>{
    return(
        <div>
            {values.map((value,i)=>{
                return(
                    <div key={i}>
                        <div>
                            <value.icon/>
                            <h3>{value.title}</h3>
                        </div>
                        <p>{value.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}