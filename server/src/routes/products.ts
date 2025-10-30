import express from "express";
import * as ProductController from "../controllers/productController.ts";
const router = express.Router();

// GET all products
router.get("/", ProductController.getProducts);

// GET a single product by 
router.get("/:id", ProductController.getProduct);

export default router;
