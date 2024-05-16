const express = require("express")
const router = express.Router()

// Controller
import { CreateUserController } from "../controllers/user/CreateUserController"
import { AuthUserController } from "../controllers/user/AuthUserController"

// Routes
router.post("/", new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)

module.exports = router