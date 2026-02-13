const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getUsers,
} = require("../Controllers/authControllers");

const authMiddleware = require("../Middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/users", authMiddleware, getUsers);

module.exports = router;