import { Router } from "express";
import { getAllUsers } from "../../controllers/UserController/UserController";

const router = Router();

router.get('/all', getAllUsers);

export default router;