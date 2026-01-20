import { Router } from "express";
import { userManager } from "../managers/user-manager.js";
import { upload } from "../middlewares/multer.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userManager.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userManager.getById(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", upload.single('image'), async (req, res) => {
  try {
    const user = await userManager.register({
      ...req.body,
      image: req.file.path
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userManager.update(id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userManager.delete(id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;