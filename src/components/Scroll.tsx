import { ScrollArea } from "@/components/ui/scroll-area"
import Book from "./Book"

const book = {
    title: "モモ",
    author: "ミヒャエル・エンデ",
    date: "2024-03-07",
    ganre: "童話"
}

const Scroll = () => {
    return (
        <ScrollArea className="w-4/5 flex justify-center items-center rounded-md border">
            <div className="p-4 flex gap-4  flex-col">
                <Book book={book}/>
                <Book book={book}/>
                <Book book={book}/>
                <Book book={book}/>
                <Book book={book}/>
            </div>
        </ScrollArea>
    )
}

export default Scroll