import express, { Request, Response } from 'express';

const router = express()

router.get("/", (req: Request, res: Response) => {
    throw new Error("Erro!")
})

module.exports = router