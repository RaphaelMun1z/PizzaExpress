const express = require("express")
const router = express.Router()

// Controller
import { CreateCategoryController } from "../controllers/category/CreateCategoryController"
import { ListCategoryController } from "../controllers/category/ListCategoryController"

// Middlewares
import { isAuthenticated } from "../middlewares/isAuthenticated"

// Routes
router.post("/", isAuthenticated, new CreateCategoryController().handle)
router.get("/", isAuthenticated, new ListCategoryController().handle)

module.exports = router