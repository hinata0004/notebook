import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Book as BookType } from "@/types/Book"
import { Button } from "@/components/ui/button"
import styles from "./EditButton.module.css"


import { ReactNode } from "react"


const Book = ({book}: {book: BookType}) => {
  return (
    <div>
      <Card className="flex flex-row">
        <div className="flex items-center justify-center flex-col w-full  bg-green-200">
        <CardHeader>
          <CardTitle>{book.title}</CardTitle>
          <CardDescription>{book.author}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{book.date}</p>
        </CardContent>
        <CardFooter>
          <p>
            {book.ganre}
          </p>
        </CardFooter>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center w-full">
        <Button variant="outline" className="w-32">編集</Button>
        <Button variant="outline" className="w-32">削除</Button>
        </div>
      </Card>
    </div>
  )
}

export default Book