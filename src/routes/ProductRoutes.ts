const express = require("express")
const router = express.Router()

import multer from "multer"
import uploadConfig from "../config/multer"

const upload = multer(uploadConfig.upload("./tmp"))

// Controller
import { ListByCategoryController } from "../controllers/product/ListByCategoryController"
import { CreateProductController } from "../controllers/product/CreateProductController"

// Middlewares
import { isAuthenticated } from "../middlewares/isAuthenticated"

// Routes
router.get("/category", isAuthenticated, new ListByCategoryController().handle)
router.post("/", isAuthenticated, upload.single('file'), new CreateProductController().handle)

module.exports = router