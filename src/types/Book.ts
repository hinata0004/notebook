export type Book = {
    id: string
    title: string
    author: string
    date: string
    genre: string
}

export type Word = {
    bookId: string
    id: string
    word: string
    read: string
    page_num: string
    example: string
}

export type BooksResponse = {
    books: Book[]
}

export type WordsResponse = {
    words: Word[]
}