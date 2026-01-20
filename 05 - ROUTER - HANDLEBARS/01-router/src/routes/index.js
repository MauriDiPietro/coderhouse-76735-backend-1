import { Router } from "express";
import productRouter from "./product-router.js";
import cartRouter from "./cart-router.js";
import userRouter from "./user-router.js";

const router = Router();

router.use('/products', productRouter);
router.use('/carts', cartRouter);
router.use('/users', userRouter);

export default router;


