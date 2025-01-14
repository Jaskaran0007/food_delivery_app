import express from "express";
// import fetch from "../middlewares/fetchdetails.js";
import fetchDetails from "../middlewares/fetchDetails.js";
import dataController from "../Controller/displayData.js";
// import checkIsUserAuthenticated from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/display/data",dataController.displayData);

export default router;