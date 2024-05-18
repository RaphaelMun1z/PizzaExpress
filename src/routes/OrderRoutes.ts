const express = require("express")
const router = express.Router()

// Controller
import { CreateOrderController } from "../controllers/order/CreateOrderController"
import { AddItemController } from "../controllers/order/AddItemController"
import { RemoveOrderController } from "../controllers/order/RemoveOrderController"
import { RemoveItemController } from "../controllers/order/RemoveItemController"

// Middlewares
import { isAuthenticated } from "../middlewares/isAuthenticated"

// Routes
router.post("/", isAuthenticated, new CreateOrderController().handle)
router.post("/add", isAuthenticated, new AddItemController().handle)
router.delete("/", isAuthenticated, new RemoveOrderController().handle)
router.delete("/remove", isAuthenticated, new RemoveItemController().handle)

module.exports = router