import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Book as BookType } from "@/types/Book"
import EditDialog from "./EditDialog"
import { Link } from "react-router-dom"
import DeleteButton from "./DeleteButton"

import React from "react"


const Book = ({book}: {book: BookType}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <div>
      <Card className="flex flex-row">
        <Link to={`/${book.id}`} className={`flex items-center justify-center flex-col w-full bg-teal-300 ${isHovered ? 'bg-teal-300' : 'bg-teal-400'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ transition: 'transform 0.3s ease-in-out', transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}>
        <CardHeader>
          <CardTitle className={"text-3xl font-bold"}>{book.title}</CardTitle>
          <CardDescription>{book.author}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{book.date}</p>
        </CardContent>
        <CardFooter>
          <p>
            {book.genre}
          </p>
        </CardFooter>
        </Link>

        <div className="flex flex-col gap-4 justify-center items-center w-full bg-teal-100">
        <EditDialog book={book}/>
        <DeleteButton id={book.id}/>
        </div>
      </Card>
    </div>
  )
}

export default Book