import { ProductCard } from "@/components/atoms/productCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { readProd } from "@/lib/handleProd";
import type { Products } from "@/lib/handleProd";
import clsx from "clsx";

export default function Products() {
  const prods : Products[]= readProd().products;
  return (
    <div className={clsx(
      "max-w-[80rem] mx-auto px-8 py-[6rem] text-center ",
      "max-md:px-4",
      "max-sm:px-6"
      )}>
        <div>
          <h1 className="text-[2.25rem] text-eco-brown font-extrabold">Our Product Catalog</h1>
          <p className="mx-auto max-w-3xl text-[1.125rem] text-gray-600 ">Browse our comprehensive selection of agricultural products designed to meet all your farming needs.</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="w-full mb-[1.5rem] text-[1.125rem] text-eco-brown text-left font-extrabold">{prods.length} Products Found</p>        
            {prods && <Cats  prods={prods}/> }
            {prods && <ProdsList prods={prods}/>}
        </div>
     </div>
  );
}

// const HeaderLinks = ({className="",isOpen} : HeaderLinkProps) =>{
type CatsProp = {
  prods:Products[];
}

const Cats = ({prods}:CatsProp) =>{
  const cats: Record<string,string> = {}
  const catsArr =  [];
  let tag = "";
  prods.map((prod,i)=>{
    tag = prod.tag;
    cats[tag]  = cats[tag] || tag;
  })
  for( const cat in cats){
    catsArr.push(cat);
  }
  catsArr.unshift("All");
  return(
    
    <div className="w-full flex flex-wrap gap-[0.75rem] items-start">
      {
        catsArr.map((cat,i)=>{
          return(
            <Button key={i} className="  px-6 py-3 bg-transparent border border-pri-green hover:bg-pri-green">
              <p className="text-eco-brown">{cat}</p>              
            </Button>

          )
        })
      }
    </div>
  
  )
}

type ProdsListProps = CatsProp &{};
const ProdsList = ( {prods} : ProdsListProps) =>{
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


 