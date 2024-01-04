import { Quote } from './data'

export const getRandomQuote = (arr: Quote[]): Quote => {
    return arr[Math.floor(Math.random() * arr.length)]
}
