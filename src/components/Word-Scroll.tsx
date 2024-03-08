import { ScrollArea } from "@/components/ui/scroll-area"
import Word from "./Word"
import { useState } from "react"

const DemoWords = [
    {
        id: "1",
        word: "綯い交ぜ",
        read: "ないまぜ",
        pageNum: "120",
        example: "色々なものを混ぜ合わせて一緒にすること",
        bookId: "1"
    },
    {
        id: "2",
        word: "燦然",
        read: "さんぜん",
        pageNum: "121",
        example: "きらきらと光り輝くさま",
        bookId: "1"
    },
    {
        id: "3",
        word: "歯の根が合わない",
        read: "はのねがあわない",
        pageNum: "122",
        example: "怖さで歯が鳴るほど震えること",
        bookId: "1"
    },
]

const WordScroll = () => {
    const [words, setWords] = useState(DemoWords)
    return (
        <ScrollArea className="w-4/5 flex justify-center items-center rounded-md border">
            <div className="p-4 flex gap-4  flex-col">
                {
                    words.map((word) => {
                        return (
                            <Word word={word} key={word.id} />
                        )
                    })
                }
            </div>
        </ScrollArea>
    )
}

export default WordScroll