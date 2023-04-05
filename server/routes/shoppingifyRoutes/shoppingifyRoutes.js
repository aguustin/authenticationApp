import { Router } from "express";
import { allProducts, productsByCategory, enterProduct, addToListController, deleteAllProducts} from "../../controllers/shoppingifyController/shoppingifyController.js";

const router = Router();

router.get("/allProducts", allProducts);

router.get("/productsByCategory/:category", productsByCategory);

router.post("/enterProduct", enterProduct);

router.patch("/addToListQuantity/:category/:name", addToListController);

router.delete("/deleteAllProducts", deleteAllProducts);

export default router;