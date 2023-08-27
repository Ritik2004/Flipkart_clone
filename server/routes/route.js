import express from "express";
import { userSignup, userLogin} from "../controllers/user-controller.js";
import { getProducts } from "../controllers/product-controller.js";

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);

export default router;