
import { ProdsList } from "@/components/general/PodsList";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";



import clsx from "clsx";


export default async function Products() {
  // const res = await fetch('/api/products')
  // const prods :Product[] = await  res.json();
   
  
  
  
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
          {/* <p className="w-full mb-[1.5rem] text-[1.125rem] text-eco-brown text-left font-extrabold">{prods.length} Products Found</p>         */}
            {/* {prods && <Cats  prods={prods}/> } */}
            {<ProdsList useFor="products" />}
        </div>
     </div>
  );
}

// const HeaderLinks = ({className="",isOpen} : HeaderLinkProps) =>{
type CatsProp = {
  prods:Product[];
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




 