import path from "path";
import fs from "fs";
import { DATA_PATH } from "../constants/constants.ts";
import { makeProduct } from "../factories/productFactory.ts";
import { fileURLToPath } from "url";
import type { ProductModel } from "../models/product.model.ts";


// "__dirname is not defined in ES module scope" so I looked how to fix it then saw this code
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname,DATA_PATH);


export async function seedProducts(count:number = 20){

    const products : ProductModel[] = [];
    const prods: Record<string,string>  = {};
    let prod : ProductModel = {
        id: 0,
        name: "",
        description: "",
        price: 0,
        category: "",
        tags: [],
        image: ""
    };

    while(products.length < count){
        prod = makeProduct();
        if(!prods[prod.name]){
            prods[prod.name] = prod.name;
            products.push(prod);
        }
    }

    products.forEach((prod,i)=>{
        prod.id = i+1;
        return{
            ...prod
        }
    })
    try {
        await fs.promises.writeFile(dataPath,JSON.stringify(products,null,2));    
    } catch (err) {
        console.error('[Error] Failed Seeding Product data json', err);
        
    }
    
    console.log({count,dataPath});   
}

if (process.argv[1]?.includes("productSeeder")){
    seedProducts(30);
}