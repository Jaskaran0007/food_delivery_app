import express from "express";
import Order from "../models/Order.js"; // Ensure you import the correct model

class OrderController {
    static userOrder = async (req, res) => {
        try {
            const { email, order_date, order_data } = req.body;
            // Input validation
            if (!email || !order_date || !order_data) {
                return res.status(400).json({ message: "Email, order date, and order data are required." });
            }
            // Add the order date as the first element in the order data array
            const data = [...order_data];
            data.unshift({ Order_date: order_date });
            console.log("Processing order for email:", email);
            // Check if a user order already exists in the database
            const existingOrder = await Order.findOne({ email });
            if (!existingOrder) {
                // If no order exists for the email, create a new entry
                console.log("No existing order found. Creating a new order.");
                await Order.create({
                    email,
                    order_data: [data],
                });
                return res.status(201).json({ success: true, message: "Order created successfully." });
            } else {
                // If order exists, update it by adding the new order data
                console.log("Existing order found. Updating the order.");
                await Order.findOneAndUpdate(
                    { email },
                    { $push: { order_data: data } },
                    { new: true } // Return the updated document
                );
                return res.status(200).json({ success: true, message: "Order updated successfully." });
            }
        } catch (error) {
            console.error("Error processing order:", error.message);
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    };
}

export default OrderController;
