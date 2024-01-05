import { NextFunction, Request, Response } from "express"
import { Quote, User, quotes, users } from "./data"
import { filterQuotesByPerson, findNextAvailableId, findQuoteIndexByID, getRandomQuote } from "./utils"

import express from "express"

const app = express()

const PORT = process.env.PORT || 4001

app.get("/api/quotes/random", (_req: Request, res: Response, _next: NextFunction) => {
    const quote: { quote: Quote } = {
        quote: getRandomQuote(quotes),
    }
    res.send(quote)
})

app.get("/api/quotes", (req: Request, res: Response, _next: NextFunction) => {
    if (req.query.person) {
        const authorQuotes: { quotes: Quote[] } = {
            quotes: filterQuotesByPerson(quotes, req.query.person),
        }
        res.send(authorQuotes)
    } else {
        const allQuotes: { quotes: Quote[] } = { quotes: quotes }
        res.send(allQuotes)
    }
})

app.post("/api/quotes", (req: Request, res: Response, _next: NextFunction) => {
    const person: string = String(req.query.person)
    const quote: string = String(req.query.quote)
    if (person != undefined && quote != undefined) {
        const id = findNextAvailableId(quotes)
        const newQuote: Quote = { quote, person, id }
        quotes.push(newQuote)
        res.send({ quote: newQuote })
    }
    res.status(400).send()
})

app.put("/api/quotes", (req: Request, res: Response) => {
    const id = Number(req.query.id)
    const quote = String(req.query.quote)
    if (id != undefined && quote != undefined) {
        const index: number = findQuoteIndexByID(quotes, id)
        if (index >= 0) {
            quotes[index].quote = quote
            res.send({ quote: quotes[index] })
        } else {
            res.status(404).send("Quote not found")
        }
    } else {
        res.status(400).send()
    }
})

app.get("/api/users", (req: Request, res: Response, _next: NextFunction) => {
    if (req.query.id) {
        const user = users.find((user) => {
            return user.id === Number(req.query.id)
        })
        if (user != undefined) {
            res.send(user)
        } else {
            res.status(404).send()
        }
    } else {
        const allUsers: { users: User[] } = { users }
        res.send(allUsers)
    }
})

app.post("/api/users", (req: Request, res: Response, _next: NextFunction) => {
    const firstName: string = String(req.query.firstName)
    const lastName: string = String(req.query.lastName)
    if (firstName != undefined && lastName != undefined) {
        const id = findNextAvailableId(users)
        const newUser: User = { id, firstName, lastName }
        users.push(newUser)
        res.send({ user: newUser })
    }
    res.status(400).send()
})

app.use(express.static("public"))
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
