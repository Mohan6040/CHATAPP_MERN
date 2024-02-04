import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";


const router = express.Router();

// router.get("/signup", (req, res) => {
//   //   console.log("Signup routes");
//   res.send("Signup routes");
// });
router.post("/signup",signup);

// router.get("/login", (req, res) => {
//     //   console.log("login routes");
//     res.send("Login routes");
//   });
router.post("/login",login);

//   router.get("/logout", (req, res) => {
//     //   console.log("Logout routes");
//     res.send("Logout routes");
//   });
router.post("/logout",logout);

export default router;
