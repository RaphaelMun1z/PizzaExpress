require("dotenv").config()

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({
    credentials: true,
    origin: [
        "https://localhost",
    ]
}))

const router = require("./routes/Router.ts")
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(port, () => {
    console.log("Servidor rodando na porta 3000.")
})