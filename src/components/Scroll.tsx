import { ScrollArea } from "@/components/ui/scroll-area"
import Book from "./Book"
import { useState, useEffect } from "react"
import { Book as BookType , BooksResponse } from "@/types/Book"

const Scroll = () => {
    const [books, setBooks] = useState<BookType[]>([])
    useEffect(() => {
        async function FetchBookData() {
            const result = await fetch("https://93a4-131-206-225-158.ngrok-free.app/api/books", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "1"
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