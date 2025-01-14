    import User from "../models/userModel.js";
    import bcrypt from "bcryptjs";
    import jwt from "jsonwebtoken";
    import dotenv from "dotenv";
    import {body,validationResult} from "express-validator";
    class createController{
        static validateUser = [
            body('email','email is not a correct format').isEmail(),
            body('name','Name must be more then 5 Characters').isLength({min: 5}),
            body('password','Incorrect Password').isLength({min: 5})
        ]
        static createUser = async(req, res) =>{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Validation failed", errors: errors.array() });
            }
            const {name, password, email, location} = req.body;
            try {
                if(!email || !password || !name || !location){
                    return res.status(400).json({message: "All fields are required"});
                }
                const isEmail = await User.findOne({email:email});
                if(isEmail){
                    return res.status(400).json({message: "This email is already exists"});
                }
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password,salt);
                const newUser = await User.create({
                    name: name,
                    password: hashedPassword,
                    email: email,
                    location: location,
                });
                return res.status(201).json({ message: "User  created successfully", user: newUser  });

            } catch (error) {
                return res.status(400).json({message:error.message});
            }
        }
        static loginUser = async (req,res) => {
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ message: "Validation failed", errors: errors.array() });
            // }
            const {email, password } = req.body;
            try {
                const isEmail = await User.findOne({email});
                if(!isEmail){
                    return res.status(400).json({message: "Email is not registered"});
                }
                const isMatch = await bcrypt.compare(password, isEmail.password);
                if(!isMatch){
                    return res.status(400).json({ message: "Invalid password" });
                }
                const token = jwt.sign({userId: isEmail._id}, "pleaseSubscribe",{expiresIn:"2d"});
                return res.status(200).json({message:"Login Successfully",token});
            } catch (error) {
                return res.status(400).json({message:error.message});
            }
        }
    }
    export default createController;

