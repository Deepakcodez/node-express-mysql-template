const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// CRUD Routes
router.post("/", createUser); // CREATE - POST /api/users
router.get("/", getAllUsers); // READ - GET /api/users
router.get("/:id", getUserById); // READ - GET /api/users/:id
router.put("/:id", updateUser); // UPDATE - PUT /api/users/:id
router.delete("/:id", deleteUser); // DELETE - DELETE /api/users/:id

module.exports = router;
