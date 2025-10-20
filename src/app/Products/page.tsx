'use client'
import { LoadingProds } from "@/components/general/loadingProds";
import { ProdsList } from "@/components/general/PodsList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import { Product } from "@/lib/types";
import { getProds } from "@/utils/handleProds";



import clsx from "clsx";
import { ChevronDown, Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default  function Products() {
  const [prods,setProds] = useState<Product[]>([]);
  const [filteredProds,setFilteredProds] = useState<Product[]>([]);
  const [filteredByCatsProds,setFilteredByCatsProds] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState<string[]>([]);
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const debounceSearch = useDebounce(searchTerm,500);

  useEffect(()=>{
    getProds()
    .then((data)=>{      
      const seen = new Set();
      const c = data.map(p=>{
        if(!seen.has(p.tag)){
          seen.add(p.tag);
          return p.tag;
        }
        return undefined
      }).filter(cat => cat !== undefined)            
      setCats(c)      
      setProds(data);
      setFilteredProds(data);

    })
    .catch((err)=> console.error(err))
    .finally(()=>{setLoading(false)});
  },[])

  useEffect(()=>{    
    let filtered :Product[]= [];
    if (selectedCat.length){
      if (selectedCat == "all") {
        setFilteredByCatsProds(prods);
        setFilteredProds(prods);
        setSearchTerm('');
      }
      else {
        filtered = prods.filter((p => p.tag == selectedCat));
        setSearchTerm('');
        setFilteredByCatsProds(filtered);
        setFilteredProds(filtered);
      }      
    }            
  },[selectedCat])

  useEffect(()=>{    
    let filtered :Product[]= [];
    if (!searchTerm.length) {
      setFilteredProds(filteredByCatsProds)      
    }
    else{
      filtered = filteredProds.filter((p => p.title.toLowerCase().includes(searchTerm.toLowerCase())));
      setFilteredProds(filtered);
    }
  },[debounceSearch])

  
   
  
  
  return (
    <div className={clsx(
      "w-full mx-auto px-4 py-[3rem] text-center ",
      "max-md:px-4",
      "max-sm:px-3"
      )}>
        <div>
          <h1 className="text-lg-head text-eco-brown font-extrabold">Our Product Catalog</h1>
          <p className={clsx(
            "mx-auto max-w-3xl text-lg-desc text-gray-600",
            "max-sm:text-sm-desc"
          )}>Browse our comprehensive selection of agricultural products designed to meet all your farming needs.</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          
            { loading ? <LoadingProds/>
              :  
              <>
              <div className={clsx(
                "w-full p-6  flex gap-4",              
                "flex-col"
              )}>
                <div className={clsx(
                  "w-fit",
                  ""
                )}>
                  <div className=" w-[20rem] bg-white relative rounded-lg">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
                <div className=" cats-ctrl relative w-fit  ">
                  <Button className={clsx(
                  "panel absolute left-0 w-fit h-[2rem] gap-0 bg-transparent text-gray-600 cursor-pointer ",
                  "flex flex-col gap-[0rem] items-start justify-start",
                  "hover:bg-transparent hover:text-pri-green",                  
                  "cats z-70 hover:h-[15rem]   [&>.select]:hidden [&>.select]:h-0 hover:[&>.select]:flex hover:[&>.select]:h-[10rem]",
                  selectedCat !== 'all' ? "  ":""
                  )}>
                    <div className="flex items-center justify-center gap-[2rem]">
                      {selectedCat !== 'all' ? <p>{selectedCat} </p>:null}
                      <div className="flex">
                        <span><Filter/></span>
                        <span className="down transition-[all_5000ms_linear]"><ChevronDown/></span>
                      </div>
                    </div>  
                    <div                                        
                  className={clsx(
                  " select w-fit h-fir  px-3 py-2 ",
                  " bg-white border border-input  rounded-md text-sm text-gray-600 text-left",
                  "flex flex-col gap-2",
                  " panel  overflow-hidden"

                )}
                >
                  <option value="all"
                  className="hover:text-pri-green"
                  onClick={()=>setSelectedCat("all")}
                  >All Categories</option>
                  {cats.map((category,i) => (
                    <option key={i} value={category} className="hover:text-pri-green"
                    onClick={()=>setSelectedCat(category)}
                    >
                      {category}
                    </option>
                  ))}
                  </div>                   
                  </Button>                      
                </div>                                
              </div>                            
              </> 
            }                        
        </div>
        <ProdsList prods={filteredProds}/>
     </div>
  );
}

// const HeaderLinks = ({className="",isOpen} : HeaderLinkProps) =>{



 