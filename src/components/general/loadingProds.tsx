import clsx from "clsx"
import { Card } from "../ui/card"
import { Heart } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"


export  const LoadingProds = () =>{
    return(
        <div className={clsx(      
              " mt-[2rem] w-full flex flex-wrap gap-4 ",
              "max-md:items-center max-md:justify-center ",
              // "max-sm:flex max-sm:flex-cols",      
          )}> 
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
            
        </div>
    )
}

const LoadingCard = () =>{
    return(
        <div  className={cn(
            "shim light-shim pt-0 pb-3 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ",
            "w-[15.125rem] shrink-0",
            "max-sm:w-[20rem] ",
            "flex flex-col gap-2",
            
            // "max-sm-sm:h-fit max-sm-sm:w-[6.7rem]",
            
            
        )}
        // style={ 
        //       {background: "linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%)"}
        //     }
            >
            <div className="relative w-full aspect-[1.375/1] ">
                <div className="shim dark-shim w-full h-full  bg-gray-400 object-cover"/>
                <span 
                className="absolute top-[0.75rem] right-[0.75rem] rounded-[100%] aspect-square w-[2.25rem] bg-gray-200  flex items-center justify-center cursor-pointer"                
                >        
                    <Heart className="fill-gray-400 text-transparent"/>
                </span>
                <p className="absolute top-[0.75rem] left-[0.5rem] px-[.5rem] w-[3rem] h-[1rem] text-lg-desc bg-off-white text-gray-600 rounded-full text-nowrap text-ellipsis"/>
            </div >
            <div className={clsx(
                " px-[.5rem] ",
                "max-sm:px-[0.5rem]"
            )}> 
                < p className="mb-[1rem] w-[7rem] h-[1rem] text-left text-eco-brown font-[700] text-lg-desc  bg-gray-300 rounded-2xl"/>                                  
                <p className="w-[7rem] h-[1rem] text-left text-eco-brown font-[700] text-lg-desc  bg-gray-300 rounded-2xl"/>
                
            </div>
            <Button className="mx-auto  w-[90%] hover:bg-gray-300 bg-gray-300"/>
                
        </div>
    )
}