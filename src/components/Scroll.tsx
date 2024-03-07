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
        <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                <Book book={book}/>
            </div>
        </ScrollArea>
    )
}

export default Scroll