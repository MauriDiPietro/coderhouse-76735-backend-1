import express from "express";
import { userManager } from "./managers/user-manager.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/users", async (req, res) => {
  try {
    const users = await userManager.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userManager.getById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const user = await userManager.register(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userManager.update(id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userManager.delete(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ------------------------------------ - ----------------------------------- */

app.post("/api/carts", (req, res) => {});

app.get("/api/carts/:cid", (req, res) => {
  const { cid } = req.params;
});

app.post("/api/carts/:cid/product/:pid", (req, res) => {
  const { cid } = req.params;
  const { pid } = req.params;
//   await cartManager.addProdToCart(cid, pid)
});

app.listen(8080, () => console.log("Server running on port 8080"));
