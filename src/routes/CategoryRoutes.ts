const express = require("express")
const router = express.Router()

// Controller
import { CreateCategoryController } from "../controllers/category/CreateCategoryController"

// Middlewares
import { isAuthenticated } from "../middlewares/isAuthenticated"

// Routes
//router.get("/me", isAuthenticated, new DetailUserController().handle)
router.post("/", isAuthenticated, new CreateCategoryController().handle)
//router.post("/session", new AuthUserController().handle)

module.exports = router