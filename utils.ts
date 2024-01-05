import { Quote } from "./data"

export const getRandomQuote = (arr: Quote[]): Quote => {
    return arr[Math.floor(Math.random() * arr.length)]
}

export const filterQuotesByPerson = (
    quotesArray: Quote[],
    personName: any
): Quote[] => {
    return quotesArray.filter((quote) => quote.person === personName)
}
