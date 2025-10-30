import { faker } from "@faker-js/faker";
import type { CategoryModel } from "../models/category.model.ts";


export function makeCategory():CategoryModel{
    return{
        id: faker.number.int(),
        name:faker.commerce.department(),
    }
}