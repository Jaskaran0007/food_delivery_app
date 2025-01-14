// // import mongoose from "mongoose";
// // import Order from '../models/Order.js'; // Adjust the path according to your project structure

// // class MyOrderController {
// //     static MyOrder = async (req, res) => {
// //         try {
// //            const myData = await Order.findOne({'email': req.body.email})
// //            res.json({orderData:myData})
// //         } catch (error) {
// //             res.send("Server Error", error.message) // Send the error message with a 500 status
// //         }
// //     }
// // }

// // export default MyOrderController; // Don't forget to export your controller
// import mongoose from "mongoose";
// import Order from '../models/Order.js'; // Adjust the path according to your project structure

// class MyOrderController {
//     static MyOrder = async (req, res) => {
//         try {
//             const myData = await Order.findOne({'email': req.body.email});
//             if (!myData) {
//                 return res.status(404).json({ message: "No orders found for this email." });
//             }
//             res.json({ orderData: myData });
//         } catch (error) {
//             console.error(error);
//             res.status(500).send("Server Error: " + error.message); // Send the error message with a 500 status
//         }
//     }
// }

// export default MyOrderController; // Don't forget to export your controller
import Order from '../models/Order.js'; // Adjust the path to your Order model

class MyOrderController {
    static MyOrder = async (req, res) => {
        try {
            const { email } = req.body;

            // Validate that the email is provided
            if (!email) {
                return res.status(400).json({ message: "Email is required." });
            }

            console.log("Fetching orders for email:", email);

            // Fetch orders based on the email
            const orderData = await Order.findOne({ email });

            // If no orders are found for the provided email
            if (!orderData) {
                return res.status(404).json({ message: "No orders found for this email." });
            }

            // Return the fetched order data
            res.status(200).json({ orderData });
        } catch (error) {
            console.error("Error in fetching orders:", error.message);
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    };
}

export default MyOrderController;

