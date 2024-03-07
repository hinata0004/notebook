import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Book as BookType } from "@/types/Book"

import { ReactNode } from "react"


const Book = ({book}: {book: BookType}) => {
  return (
    <div>
      <Card>
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
      </Card>
    </div>
  )
}

export default Book