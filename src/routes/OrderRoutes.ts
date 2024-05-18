const express = require("express")
const router = express.Router()

// Controller
import { CreateOrderController } from "../controllers/order/CreateOrderController"
import { AddItemController } from "../controllers/order/AddItemController"
import { SendOrderController } from "../controllers/order/SendOrderController"
import { FinishOrderController } from "../controllers/order/FinishOrderController"
import { ListOrdersController } from "../controllers/order/ListOrdersController"
import { DetailOrderController } from "../controllers/order/DetailOrderController"
import { RemoveItemController } from "../controllers/order/RemoveItemController"
import { RemoveOrderController } from "../controllers/order/RemoveOrderController"

// Middlewares
import { isAuthenticated } from "../middlewares/isAuthenticated"

// Routes
router.post("/", isAuthenticated, new CreateOrderController().handle)
router.post("/add", isAuthenticated, new AddItemController().handle)
router.put("/send", isAuthenticated, new SendOrderController().handle)
router.put("/finish", isAuthenticated, new FinishOrderController().handle)
router.get("/", isAuthenticated, new ListOrdersController().handle)
router.get("/detail", isAuthenticated, new DetailOrderController().handle)
router.delete("/remove", isAuthenticated, new RemoveItemController().handle)
router.delete("/", isAuthenticated, new RemoveOrderController().handle)

module.exports = router