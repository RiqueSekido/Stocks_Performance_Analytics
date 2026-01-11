import express from "express"

import { getStockSummaryController } from "../controllers/stockController.js";

const router = express.Router();



// GET /stocks/summary?ticker=BBAS3
router.get("/summary", getStockSummaryController);

export default router;