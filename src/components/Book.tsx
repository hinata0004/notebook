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
import EditDialog from "./EditDialog"
import { Link } from "react-router-dom"
import DeleteButton from "./DeleteButton"

import React from "react"


const Book = ({book}: {book: BookType}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <div>
      <Card className="flex flex-row">
        <Link to={`/${book.id}`} className="flex items-center justify-center flex-col w-full   bg-teal-300">
        <CardHeader>
          <CardTitle 
          className={`text-3xl font-bold text-center ${isHovered ? 'underline' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ transition: 'transform 0.3s ease-in-out', transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          >{book.title}</CardTitle>
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
        </Link>

        <div className="flex flex-col gap-4 justify-center items-center w-full bg-teal-100">
        <EditDialog book={book}/>
        <DeleteButton />
        </div>
      </Card>
    </div>
  )
}

export default Book