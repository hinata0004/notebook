import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button"
import WordScroll from "../Word-Scroll"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DatePicker } from "../ui/date-picker"
import CreateWordButton from "../Create-WordButton";



export default function Bookdetail(){
    const { id } = useParams()
    return (
      <div className="text-center">
        <h1 className=" text-5xl font-bold mt-10 mb-10">単語帳</h1>
        <CreateWordButton id={id!}/>
        <div className=" text-center flex justify-center">
          <WordScroll id={id!}/>
        </div>
      </div>
    )
}