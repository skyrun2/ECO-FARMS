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
    story:string[];
    mission:string;
    values: Value[];
}
export const aboutData : AboutData= {
    desc:"Your trusted partner in agriculture, providing premium livestock feeds, fresh meat, and quality seafood to farming communities across the region.",
    story:[
        "Founded with a deep passion for agriculture, AgroFresh began as a small family business dedicated to supporting local farmers with quality products and reliable service. Over the years, we've grown into a trusted name in the agricultural community.",
        "Our journey started when we recognized the need for a reliable supplier that truly understood the challenges facing modern farmers. We committed ourselves to sourcing the finest livestock feeds, freshest meats, and highest quality seafood products.",
        "Today, we serve hundreds of farms and agricultural businesses, maintaining the same personal touch and commitment to quality that defined our early days. Our success is measured by the success of our customers and the thriving agricultural community we serve",
    ],
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
        <section className={clsx(
            "py-[6rem] mx-auto px-[2rem]  max-w-[80rem] ",
            "max-sm:px-[1.5rem]"
        )}>
            <div className=" mb-[4rem] text-center">
                <h1 className={clsx(
                    "mb-[1rem] text-[2.25rem]  font-[800] text-eco-brown",
                    "max-md:text-[1.87rem]"
                )}>About Eco-Farm</h1>
                <p className="max-w-[48rem] mx-auto text-[1.125rem] text-gray-600">{aboutData.desc}</p>
            </div>
            <div className={clsx(
                "space-y-6 mb-[5rem] grid grid-cols-2 gap-[3rem] ",
                "max-lg:grid-cols-1"
                
            )}>
                <div className="">
                    <h2 className={clsx(
                        "text-[1.875rem] font-bold text-eco-brown",
                        "max-md:text-[1.5rem]"
                    )}>Our Story</h2>
                    <div className={clsx(
                        "space-y-4 text-gray-600 text-[1.125rem] leading-relaxed "
                    )}>{
                        aboutData.story.map((story,i)=>{
                            return(
                                <p key={i}>{story}</p>
                            )
                        })
                        }</div>
                </div>
                <div className="relative min-h-[25rem] rounded-[0.5rem] shadow-lg bg-cover bg-center overflow-hidden"                    
                >
                    <Image className="w-full h-full"
                        fill
                        src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                </div>
                
            </div>
            <div className="mb-[5rem] p-[3rem] bg-pri-green text-white text-center rounded-[0.5rem] flex flex-col items-center">
                <h2 className={clsx(
                    "max-md:text-2xl"
                )}>Our Mission</h2>
                <p className="max-auto max-w-[56rem] text-[1.25rem] leading-relaxed  ">{aboutData.mission}</p>
            </div>
            <div className="mb-[5rem] text-center flex flex-col items-center" >
                <h2 className="mb-[1rem] text-[1.875rem] text-eco-brown font-bold">Our Values</h2>
                <p className="max-auto max-w-[48rem] text-gray-600">These core values guide every decision we make and every relationship we build.</p>                
                <Values values={aboutData.values}/>
            </div>
            <div className="a-rtp relative p-[3rem] bg-gradient-to-r from-[#6D4C41] to-[#5D4037] text-white rounded-[.5rem]  text-center">
                
                <h2 className="mb-[1.5rem] text-[1.875rem] font-bold">Ready to Partner With Us?</h2>
                <p className="mb-[2rem] mx-auto max-w-[48rem] text-[1.25rem]">Join the growing community of successful farmers and agricultural businesses who trust AgroFresh for their premium product needs.</p>
                <div className={clsx(
                    "grid grid-cols-2   gap-[1rem] justify-center",
                    "max-md:grid-cols-1"
                )}>
                    <Button className="p-[2rem] bg-pri-green text-white  rounded-lg font-bold  text-[1.125rem] hover:bg-hover-green transition-colors">Browse Products</Button>
                    <Button className="p-[2rem] bg-transparent border-2 border-white text-white  rounded-lg font-bold  text-lg hover:bg-white hover:text-[#6D4C41] transition-colors">Contact Us</Button>
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
        <div className={clsx(
            "mt-[2rem] grid grid-cols-2 gap-[2rem] ",
            "max-md:grid-cols-1"
        )}>
            {values.map((value,i)=>{
                return(
                    <div key={i} className="p-[2rem] w-full bg-white rounded-[0.5rem] shadow-lg hover:shadow-xl transition-shadow flex items-start space-x-[1rem]">
                        <span className="bg-pri-green w-[3rem] h-[3rem] rounded-full flex items-center justify-center flex-shrink-0">
                            <value.icon className="text-white"/>
                        </span>
                        <div className="">
                            <h3 className="mb-[0.75rem] text-xl font-bold text-eco-brown ">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}