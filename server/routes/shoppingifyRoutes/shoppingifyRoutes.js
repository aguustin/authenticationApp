import { Router } from "express";
import { allProducts, productsByCategory, enterProduct, deleteOneProduct, deleteAllProducts} from "../../controllers/shoppingifyController/shoppingifyController.js";

const router = Router();

router.get("/allProducts", allProducts);

router.get("/productsByCategory/:category", productsByCategory);

router.post("/enterProduct", enterProduct);

router.delete("/deleteOneItem/:name", deleteOneProduct);

router.delete("/deleteAllProducts", deleteAllProducts);

export default router;