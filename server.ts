import { NextFunction, Request, Response } from "express"
import { Quote, quotes } from "./data"

import express from "express"
import { getRandomQuote } from "./utils"

const app = express()

const PORT = process.env.PORT || 4001

app.get(
    "/api/quotes/random",
    (_req: Request, res: Response, _next: NextFunction) => {
        const quote: { quote: Quote } = {
            quote: getRandomQuote(quotes),
        }
        res.send(quote)
    }
)

app.get("/api/quotes", (req: Request, res: Response, _next: NextFunction) => {
    if (req.query.person) {
        const authorQuotes: { quotes: Quote[] } = {
            quotes: quotes.filter((quote) => {
                return quote.person === req.query.person
            }),
        }
        res.send(authorQuotes)
    } else {
        const allQuotes: { quotes: Quote[] } = { quotes: quotes }
        res.send(allQuotes)
    }
})

app.use(express.static("public"))
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
