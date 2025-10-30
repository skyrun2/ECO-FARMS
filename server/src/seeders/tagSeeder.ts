import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { TAGS_PATH } from "../constants/constants.ts";
import { makeTag } from "../factories/tagFactory.ts";
import type { TagModel } from "../models/tag.model.ts";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tagsPath = path.join(__dirname,TAGS_PATH);

export async function SeedTags(count:number = 15){
    const tags : TagModel[] = [];
    const tagsObj : Record<string,string> ={}
    let tag : TagModel = {
        id: 0,
        name: ""
    };

    while (tags.length < count) {
        tag = {...makeTag()}
        if (!tagsObj[tag.name]) {
            tagsObj[tag.name] = tag.name;
            tags.push(tag);
        }
        else continue
    }
    tags.forEach((tag,i)=>{
        tag.id = i+1;
        return{...tag};
    })
    
    try {            
        await fs.promises.writeFile(tagsPath,JSON.stringify(tags,null))
    } catch (err) {
        console.error('[ERROR] FAiled to seed tags json',err);
            
    }
        console.log("seeding successful");

}

if(process.argv[1]?.includes("tagSeeder")){
    SeedTags();
}