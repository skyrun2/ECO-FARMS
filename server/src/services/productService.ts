import path from "path";
import type { ProductModel } from "../models/product.model.ts";
import fs from "fs";

const dataPath = path.join(process.cwd(),"src/data/productsData.json");

export async function getAllProducts(): Promise<ProductModel[]>{
    try {
        const data = await fs.promises.readFile(dataPath,'utf-8');    
        return JSON.parse(data);

    } catch (err) {
        console.error("[ERROR] failed Reading file ",err);
        return [];
    }
    
    
}

export async  function getProductById(id:string): Promise<ProductModel|undefined>{
    try{
        const products : ProductModel[] = await getAllProducts();
        return products.find((p)=> p.id === id);
    }
    catch(err){
        console.error("[ERROR] Failed fetching product by id",err);
        return undefined;
        
    }
}

export async function getProductsByCategory(category: string): Promise<ProductModel[]> {
  const products = await getAllProducts();
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export async function getProductsBySubCategory(tag: string): Promise<ProductModel[]> {
  const products = await getAllProducts();
  return products.filter((p) =>
    p.subCategories.some((sub) => sub.toLowerCase() === tag.toLowerCase())
  );
}



