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
  import DeleteWordButton from "./Delete-WordButton"
  
  
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
            <p>ページ数：{word.page_num}</p>
          </CardContent>
          <CardFooter>
            <p>
              {word.example}
            </p>
          </CardFooter>
          </div>
  
          <div className="flex flex-col gap-4 justify-center items-center w-full bg-green-50">
          <WordEditDialog word={word}/>
          <DeleteWordButton id={word.id}/>
          </div>
        </Card>
      </div>
    )
  }
  
  export default Word