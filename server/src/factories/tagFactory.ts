import { faker } from "@faker-js/faker";
import type { TagModel } from "../models/tag.model.ts";



export function makeTag(): TagModel{
    return{
        id: faker.number.int(),
        name: faker.commerce.productAdjective(),
    }
    

}