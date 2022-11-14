import { Router } from "express";

//Cakes
import { validateCake } from "../middleware/cakes";
import { getCakes, postCake, putCake, deleteCake } from "../controllers/cakes";

const router = Router();

//Cakes
router.get("/cakes", getCakes);
router.post("/cakes", validateCake, postCake);
router.put("/cakes/:name", validateCake, putCake);
router.delete("/cakes/:id", deleteCake);

export default router;