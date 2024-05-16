const express = require("express")
const router = express.Router()

// Controller
import { CreateUserController } from "../controllers/user/CreateUserController"

// Routes
router.post("/", new CreateUserController().handle)

module.exports = router