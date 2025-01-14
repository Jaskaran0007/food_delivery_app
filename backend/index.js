import express from "express";
import mongoose from "mongoose";
import mongoDB from "./db.js";
import userRouter from "./routes/user.js";
import userData from "./routes/DisplayData.js";
import userOrder from "./routes/OrderData.js";
// import userOrder from "./routes/myOrder.js";
import cors from "cors";
const app = express();

mongoDB();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello world");
});

//API ROUTES
app.use("/api", userRouter);
app.use("/api/v1",userData);
app.use("/api2",userOrder);
// app.use("/api/v2",userOrder);

app.listen(5000, ()=>{
    console.log("API is working on the 5000 port");
});
