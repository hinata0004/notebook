import { ScrollArea } from "@/components/ui/scroll-area"
import Book from "./Book"
import { useState, useEffect } from "react"
import { Book as BookType , BooksResponse } from "@/types/Book"

const Scroll = () => {
    const [books, setBooks] = useState<BookType[]>([])
    useEffect(() => {
        async function FetchBookData() {
            const result = await fetch("http://localhost:8000/api/books", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data: BooksResponse = await result.json()
            setBooks(data.books)
        }
        FetchBookData()
    }, [])
    return (
        <ScrollArea className="w-4/5 flex justify-center items-center rounded-md border">
            <div className="p-4 flex gap-4  flex-col">
                {
                    books.map((book) => {
                        return (
                            <Book book={book} key={book.id}/>
                        )
                    })
                }
            </div>
        </ScrollArea>
    )
}

export default Scroll