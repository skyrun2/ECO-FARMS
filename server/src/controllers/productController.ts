import type { Request, Response } from "express";
import * as ProductService from "../services/productService.ts";


export async function getProducts(req:Request,res:Response){  
    const {category,tag}  = req.query;

    if (category) return res.status(200).json(await ProductService.getProductsByCategory(category as string));
    if (tag) return res.status(200).json(await ProductService.getProductsBySubCategory(tag as string));
    
    res.status(200).json(await ProductService.getAllProducts());
}

export async function getProduct(req:Request,res:Response){
    const id = String(req.params.id);
    const product = await ProductService.getProductById(id);

    if(!product){
        return res.status(404).json({message:"Product not found"});        
    }

    res.status(200).json(product);
}