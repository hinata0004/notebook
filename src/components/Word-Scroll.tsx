import { ScrollArea } from "@/components/ui/scroll-area"
import Word from "./Word"
import { useState, useEffect } from "react"
import { Word as WordType, WordsResponse } from "@/types/Book"

const WordScroll = ({id}: {id: string}) => {
    const [words, setWords] = useState<WordType[]>([])
    useEffect(() => {
        async function FetchWordData() {
            const result = await fetch(`https://93a4-131-206-225-158.ngrok-free.app/api/words/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "1"
                }
            })
            const data: WordsResponse = await result.json()
            setWords(data.words)
        }
        FetchWordData()
    }, [])
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