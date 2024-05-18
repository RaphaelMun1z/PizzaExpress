const express = require("express")
const router = express.Router()

// Controller
import { CreateCategoryController } from "../controllers/category/CreateCategoryController"

// Middlewares
import { isAuthenticated } from "../middlewares/isAuthenticated"

// Routes
router.post("/", isAuthenticated, new CreateCategoryController().handle)

module.exports = router