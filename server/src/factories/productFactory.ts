import type { ProductModel } from "../models/product.model.ts";
import {faker} from "@faker-js/faker"
export  function makeProduct(): ProductModel{
    return{
      id: faker.number.int(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 5, max: 200 })),
      category: faker.commerce.department(),
      tags: [faker.commerce.productMaterial()],
      image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
    }
}