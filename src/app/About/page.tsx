'use client'

import { Button } from "@/components/ui/button";
import { ECOFARMS_ABOUT, Value } from "@/lib/constants";
import clsx from "clsx";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";





export default function About(){
    const aboutData = ECOFARMS_ABOUT
    return(
        <section 
            className={clsx(
            "py-[3rem] mx-auto px-[2rem]  max-w-[80rem]",
            "max-sm:px-[1.5rem]"
        )}>
            <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={ { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className=" mb-[4rem] text-center">
                <h1 className={clsx(
                    "mb-[1rem] text-lg-head  font-[700] text-eco-brown",                    
                )}>About Eco-Farm</h1>
                <p className="w-full mx-auto text-sm-desc text-gray-600">{aboutData.desc}</p>
            </motion.div>
            <div className={clsx(
                "space-y-6 mb-[5rem] grid grid-cols-2 gap-[3rem] ",
                "max-lg:grid-cols-1"
                
            )}>
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={ { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-fit h-full flex flex-col justify-around">
                    <h2 className={clsx(
                        "text-lg-head font-bold text-eco-brown",                        
                    )}>Our Story</h2>
                    <div className={clsx(
                        " h-full text-lg-desc text-gray-600  leading-relaxed flex flex-col gap-4 justify-around"
                    )}>{
                        aboutData.story.map((story,i)=>{
                            return(
                                <p key={i}>{story}</p>
                            )
                        })
                        }</div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={ { opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="relative min-h-[25rem] rounded-[0.5rem] shadow-lg bg-cover bg-center overflow-hidden"                    
                >
                    <Image className="w-full h-full"
                        fill
                        src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                </motion.div>
                
            </div>
            <motion.div
            initial={{ opacity: 0, y: 40, x:40 }}
            animate={ { opacity: 1, y: -40, x:0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-[5rem] p-[2rem] px-[1rem] bg-pri-green text-white text-center rounded-[0.5rem] flex flex-col items-center">
                <h2 className={clsx(
                    "text-lg-head font-bold"
                )}>Our Mission</h2>
                <p className="max-auto max-w-[56rem] text-lg-desc leading-relaxed  ">{aboutData.mission}</p>
            </motion.div>
            <div className="mb-[5rem] text-center flex flex-col items-center" >
                <h2 className="mb-[1rem] text-lg-head text-eco-brown font-bold">Our Values</h2>
                <p className="max-auto max-w-[48rem] text-lg-desc text-gray-600">These core values guide every decision we make and every relationship we build.</p>                
                <Values values={aboutData.values}/>
            </div>
            <div className="a-rtp relative p-[3rem] bg-gradient-to-r from-[#6D4C41] to-[#5D4037] text-white rounded-[.5rem]  text-center">
                
                <h2 className="mb-[1.5rem] text-lg-head font-bold">Ready to Partner With Us?</h2>
                <p className="mb-[2rem] mx-auto max-w-[48rem] text-lg-desc">Join the growing community of successful farmers and agricultural businesses who trust AgroFresh for their premium product needs.</p>
                <div className={clsx(
                    "grid grid-cols-2  gap-4",
                    "max-md:grid-cols-1"
                )}>
                    <Link href="/Products" className="w-full ">
                        <Button className=" w-full p-[2rem] bg-pri-green text-white  rounded-lg font-bold  text-lg-desc hover:bg-hover-green transition-colors cursor-pointer">Browse Products</Button>                    
                    </Link>
                    <Link href="/Contact" className="w-full">
                        <Button className="w-full p-[2rem] bg-transparent border-2 border-white text-white  rounded-lg font-bold  text-lg-desc hover:bg-white hover:text-[#6D4C41] transition-colors">Contact Us</Button>                    
                    </Link>
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
                    <div key={i} className="p-[2rem] w-full bg-white rounded-[0.5rem] border shadow-lg hover:shadow-xl transition-shadow flex items-start space-x-[1rem]">
                        <span className="bg-pri-green w-[3rem] h-[3rem] rounded-full flex items-center justify-center flex-shrink-0">
                            <value.icon className="text-white"/>
                        </span>
                        <div className="">
                            <h3 className="mb-[0.75rem] text-lg-head font-bold text-eco-brown ">{value.title}</h3>
                            <p className="text-sm-desc text-gray-600 leading-relaxed">{value.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}