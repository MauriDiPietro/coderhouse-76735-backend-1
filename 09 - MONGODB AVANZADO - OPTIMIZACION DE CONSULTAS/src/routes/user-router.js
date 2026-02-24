import { Router } from "express";
import { userController } from "../controllers/user-controller.js";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.get("/name/:name", userController.getByName);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);
router.put('/add/:userId/pet/:petId', userController.addPetToUser);

export default router;
