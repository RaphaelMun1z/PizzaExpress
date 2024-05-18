import express, { Request, Response } from 'express';
const router = express()

router.use("/api/user", require("./UserRoutes"))
router.use("/api/category", require("./CategoryRoutes"))
router.use("/api/product", require("./ProductRoutes"))
router.use("/api/order", require("./OrderRoutes"))

router.get("/", (req: Request, res: Response) => {
    res.send("API Working!")
})

module.exports = router