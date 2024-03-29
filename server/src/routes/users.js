import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/register", async (req, res) => {
   const { username, fname, lname, email, phonenumber, town, street, estate, country, password } = req.body;

   const user = await UserModel.findOne({ username });

   if (user) {
      return res.json({ message: "User already exists!" });
   }

   const hashedPassword = await bcrypt.hash(password, 10);

   //! This adds the data to MongoDB
   const newUser = new UserModel({ username, fname, lname, email, phonenumber, town, street, estate, country, password: hashedPassword });
   await newUser.save();

   res.json({ message: "User Registered Successfully!" });
});

router.post("/login", async (req, res) => {
   const { username, password } = req.body;
   const user = await UserModel.findOne({ username });

   if (!user) {
      return res.json({ message: "User Doesn't exist!" });
   }

   const isPasswordValid = await bcrypt.compare(password, user.password);

   if (!isPasswordValid) {
      return res.json({ message: "Username or password is incorrect!" });
   }

   const token = jwt.sign({ id: user._id }, "secret");
   res.json({ token, userID: user._id });
});


export { router as userRouter };

export const verifyToken = (req, res, next) => {
   const authHeader = req.headers.authorization;
   if (authHeader) {
      jwt.verify(authHeader, "secret", (err) => {
         if (err) {
            return res.sendStatus(403);
         }
         next();
      });
   } else {
      res.sendStatus(401);
   }
};
