// import mongoose from "mongoose";

// const mongoURI = "mongodb+srv://prabhatmunjal77:Prabhat@cluster0.yeg7a.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0";

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected Successfully");

       
//         const fetched_data = mongoose.connection.db.collection("food_items");
//         const data = await fetched_data.find({}).toArray();
//         const foodCategory = await mongoose.connection.db.collection("foodCategory");
//         foodCategory.find({}).toArray(function (err,catData){
//             // if(err) console.log(err);
//             // else{
//             //     global.food_items = data;
//             //     global.foodCategory = catData;
//             // }
//         })
//         global.food_items = data;
//         global.foodCategory = catData;

//         // console.log(data);
//     } catch (err) {
//         console.error("---", err);
//     }
// };

// export default mongoDB;

// // const mongoose = require("mongoose");

// // const mongoURI = "mongodb+srv://prabhatmunjal77:Prabhat@cluster0.yeg7a.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0";

// // const mongoDB = async () => {
// //     try {
// //         await mongoose.connect(mongoURI, {
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true,
// //         });
// //         console.log("Connected Successfully");

// //         const fetched_data = mongoose.connection.db.collection("food_items");
// //         const data = await fetched_data.find({}).toArray();
// //         // console.log(data);
// //     } catch (err) {
// //         console.error("---", err);
// //     }
// // };

// // module.exports = mongoDB;
import mongoose from "mongoose";

const mongoURI = "mongodb+srv://prabhatmunjal77:Prabhat@cluster0.yeg7a.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0";
// const mongoURI = "mongodb+srv://GoFoo:<db_password>@cluster0.soe7k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const mongoURI = "mongodb+srv://<GoFood1>:<Prabhat123>@cluster0.soe7k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected Successfully");
        // console.log(foodCategory)

        // Fetch food items
        const fetchedData = mongoose.connection.db.collection("food_items");
        const foodItems = await fetchedData.find({}).toArray();
        // console.log(food_items)

        // Fetch food categories
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
        const foodCategories = await foodCategoryCollection.find({}).toArray();

        // Store fetched data in global variables
        global.food_items = foodItems;
        global.foodCategory = foodCategories;

        // Optional: Log the fetched data
        // console.log("Food Items:", foodItems);
        // console.log("Food Categories:", foodCategories);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

export default mongoDB;