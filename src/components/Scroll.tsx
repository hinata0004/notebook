import { ScrollArea } from "@/components/ui/scroll-area"
import Book from "./Book"
import { useState } from "react"
import { Book as BookType } from "@/types/Book"

const DemoBooks = [
    {
        id: "1",
        title: "モモ",
        author: "ミヒャエル・エンデ",
        date: "2024-03-07",
        ganre: "童話"
    },
    {
        id: "2",
        title: "氷菓",
        author: "米澤穂信",
        date: "2024-03-08",
        ganre: "ミステリー"
    },
    {
        id: "3",
        title: "ふたりの距離の概算",
        author: "米澤穂信",
        date: "2024-03-09",
        ganre: "ミステリー"
    },
    {
        id: "4",
        title: "いまさら翼といわれても",
        author: "米澤穂信",
        date: "2024-03-10",
        ganre: "ミステリー"
    },
    {
        id: "5",
        title: "さよなら妖精",
        author: "米澤穂信",
        date: "2024-03-11",
        ganre: "ミステリー"
    }
]

const Scroll = () => {
    const [books, setBooks] = useState(DemoBooks)
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