const express = require("express")
const router = express.Router()

// Controller
import { DetailUserController } from "../controllers/user/DetailsUserController"
import { CreateUserController } from "../controllers/user/CreateUserController"
import { AuthUserController } from "../controllers/user/AuthUserController"

// Middlewares
import { isAuthenticated } from "../middlewares/isAuthenticated"

// Routes
router.get("/me", isAuthenticated, new DetailUserController().handle)
router.post("/", new CreateUserController().handle)
router.post("/session", new AuthUserController().handle)

module.exports = router