import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
  res.send('get products')
})

router.get('/:id', (req, res)=>{
  res.send('get products')
})

export default router;