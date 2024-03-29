import { Quote, User } from "./data"

export const getRandomQuote = (arr: Quote[]): Quote => {
    return arr[Math.floor(Math.random() * arr.length)]
}

export const filterQuotesByPerson = (quotesArray: Quote[], personName: any): Quote[] => {
    return quotesArray.filter((quote) => quote.person === personName)
}

export const findNextAvailableId = (array: Quote[] | User[]): number => {
    // Use the map function to create an array of ids,
    // then use the spread operator to apply Math.max to it
    const maxId = Math.max(...array.map((item) => item.id))

    // The next available id will be maxId + 1
    return maxId + 1
}

export const findQuoteIndexByID = (quotesArray: Quote[], idToFind: number): number => {
    const index = quotesArray.findIndex((item) => item.id === idToFind)
    return index // This will return -1 if the quote is not found
}
