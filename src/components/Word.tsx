import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Word as WordType } from "@/types/Book"
  import { Button } from "@/components/ui/button"
  import WordEditDialog from "./Word-EditDialog"
  
  
  const Word = ({word}: {word: WordType}) => {
    return (
      <div>
        <Card className="flex flex-row">
          <div className="flex items-center justify-center flex-col w-full  bg-green-200">
          <CardHeader>
            <CardTitle>{word.word}</CardTitle>
            <CardDescription>{word.read}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>ページ数：{word.pageNum}</p>
          </CardContent>
          <CardFooter>
            <p>
              {word.example}
            </p>
          </CardFooter>
          </div>
  
          <div className="flex flex-col gap-4 justify-center items-center w-full bg-green-50">
          <WordEditDialog word={word}/>
          <Button variant="outline" className="w-32">削除</Button>
          </div>
        </Card>
      </div>
    )
  }
  
  export default Word