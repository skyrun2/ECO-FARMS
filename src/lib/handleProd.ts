import fs from "fs";
import path from "path";

export type Demo ={
    products:Products[]
}
export type Products = {
    title:string,
    price:number,
    image:string,
    tag: string,
    isFavourite:boolean,
}

const filePath = path.join(process.cwd(),"src/lib/demo_products.json");

export function readProd(): Demo {
    const prod = fs.readFileSync(filePath,"utf-8");
    return JSON.parse(prod) as Demo;
}

export function writeProd(newProd:Products):void{
    fs.writeFileSync(filePath,JSON.stringify(newProd,null,2),"utf-8");
}