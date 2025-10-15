import { ProdsList } from "@/components/general/PodsList";
import { Button } from "@/components/ui/button"

import clsx from "clsx"
import { Heart, ShoppingBag } from "lucide-react"


export default function Favorite(){
    
    console.log("hey");
    
    return(
        <section className={clsx(
            " py-24 mx-auto sm:px-6 px-8 max-w-7xl  ",
            "max-md:px-4, max-md:py-16",
            "max-sm:px-6"
        )}>
            <div className="mb-16 text-center">
                <div className="mb-4 flex items-center justify-center ">
                        <span className="w-[2rem] text-pri-green "><Heart></Heart></span>
                        <h2 className={clsx(
                            "text-4xl font-extrabold text-eco-brown ",
                            "max-md:text-3xl"
                        )}>Your Favorites Here</h2>
                </div>
                <p className="mx-auto max-w-3xl text-[1.125rem] text-gray-600">Keep track of products you&apos;re interested in. Save items to easily find them later.</p>                
            </div>
            {/* <EmptyState/> */}
            <ProdsList />

        </section>
    )
}

const EmptyState = () =>{
    return(
        <div className="py-16 text-center">
            <span className="mb-6 mx-auto w-[6rem]  aspect-square flex items-center justify-center"> <Heart className="w-[3rem] h-[3rem] bg-gray-100 text-gray-400 rounded-full "/></span>
            <h2 className="mb-4 text-2xl font-bold text-eco-brown ">No Favorites</h2>
            <p className="mb-8 max-w-md mx-auto text-[1.125rem]  text-gray-600 ">Start browsing our products and click the heart icon to save your favorites here.</p>        
            <Button className="px-8 py-4 h-[3.75rem] inline-flex items-center justify-center space-x-2 bg-pri-green text-white  rounded-lg font-bold  text-lg hover:bg-hover-green transition-colors">
                <ShoppingBag className="w-5 aspect-square"/>
                <p>Browse Products</p>
            </Button>
        </div>
    )
}