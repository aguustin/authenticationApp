import { Router } from "express";
import { LoginUser, RegisterUser, Details, EditUser } from "../controllers/usersController.js";

const router = Router();

router.post("/login", LoginUser);

router.post("/registerUser", RegisterUser);

router.get("/details/:id", Details);

router.put("/edit/:id", EditUser);

export default router;