import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";
import { CATEGORIES_PATH } from "../constants/constants.ts";
import { makeCategory } from "../factories/categoryFactory.ts";
import type { CategoryModel } from '../models/category.model.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const categoriesPath = path.join(__dirname,CATEGORIES_PATH);

export async function seedCategories(count:number = 5){
    const categories : CategoryModel[] = [];
    const cats: Record<string,string> = {};
    let cat :CategoryModel = {
        id: 0,
        name: '' 
    };
    // Array.from({length:count},()=>makeCategory());
    while(categories.length < count) {
        cat  = {...makeCategory()}
        if (cats[cat.name] === undefined) {
            cats[cat.name] = cat.name;
            categories.push(cat);
        }
        else continue;
        
    }

    categories.forEach((cat,i)=>{
        cat.id = i+1
        return{            
            ...cat
        }
    })
    
    
    try {            
        await fs.promises.writeFile(categoriesPath,JSON.stringify(categories,null))
    } catch (err) {
        console.error('[ERROR] FAiled to seed categories json',err);
        
    }
    console.log("seeding successful");
    
}

if(process.argv[1]?.includes("categorySeeder")){
    seedCategories();
}