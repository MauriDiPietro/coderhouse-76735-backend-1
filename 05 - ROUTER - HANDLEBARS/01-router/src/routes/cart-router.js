import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {});

router.get("/:cid", (req, res) => {
  const { cid } = req.params;
});

router.post("/:cid/product/:pid", (req, res) => {
  const { cid } = req.params;
  const { pid } = req.params;
//   await cartManager.addProdToCart(cid, pid)
});

export default router;


