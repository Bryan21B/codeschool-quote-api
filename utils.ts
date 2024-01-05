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

export const findNextAvailableId = (quotesArray: Quote[]): number => {
    // Use the map function to create an array of ids,
    // then use the spread operator to apply Math.max to it
    const maxId = Math.max(...quotesArray.map((quote) => quote.id))

    // The next available id will be maxId + 1
    return maxId + 1
}
