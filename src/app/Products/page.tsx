'use client'
import { ProdsList } from "@/components/general/PodsList";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";
import { Product } from "@/lib/types";
import { getProds } from "@/utils/handleProds";



import clsx from "clsx";
import { Search } from "lucide-react";
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

  if (loading) return <p>loading...</p>;
   
  
  
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
          <p className="w-full mb-[1.5rem] text-[1.125rem] text-eco-brown text-left font-extrabold">{filteredProds.length} Products Found</p>        
            { loading ? loading
              :  
              <>
              <div className=" w-full p-6  flex  gap-4">
                <div className={clsx(
                  "w-fit",
                  ""
                )}>
                  <div className=" bg-white relative rounded-lg">
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

                <div className="md:w-64">
                  <select
                    value={selectedCat}
                    onChange={(e) => setSelectedCat(e.target.value)}
                    className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="all">All Categories</option>
                    {cats.map((category,i) => (
                      <option key={i} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>    
              </div>             
              <ProdsList prods={filteredProds}/> 
              </>  
            }
            
            
        </div>
     </div>
  );
}

// const HeaderLinks = ({className="",isOpen} : HeaderLinkProps) =>{



 