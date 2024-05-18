const express = require("express")
const router = express.Router()

// Controller
import { CreateOrderController } from "../controllers/order/CreateOrderController"
import { RemoveOrderController } from "../controllers/order/RemoveOrderController"

// Middlewares
import { isAuthenticated } from "../middlewares/isAuthenticated"

// Routes
router.post("/", isAuthenticated, new CreateOrderController().handle)
router.delete("/", isAuthenticated, new RemoveOrderController().handle)

module.exports = router