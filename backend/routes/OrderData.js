import mongoose from "mongoose";
import express from "express";
import Order from "../models/Order.js";
import fetch from "../middlewares/fetchDetails.js";
import OrderController from "../Controller/orderData.js";
import MyOrderController from "../Controller/myOrder.js";

const router = express.Router();

router.post("/order/data",OrderController.userOrder);
router.post("/my/order",MyOrderController.MyOrder)

export default router;
