import { Button } from "@/components/ui/button"

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
import { DatePicker } from "./ui/date-picker"
import { useNavigate } from "react-router-dom"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const CreateWordButton = ({id}: {id: string}) => {
    const navigate = useNavigate()
    const formSchema = z.object({
      word: z.string().min(2).max(50),
      read: z.string(),
      page_num: z.string(),
      example: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const CreateWord = async (values: z.infer<typeof formSchema>) => {
      const body = {
        book_id: id,
        ...values
      }
      const result = await fetch("http://localhost:8000/api/word", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      if (result.status !== 200) {
        alert("作成に失敗しました")
      }
      window.location.href = "/"
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        console.log(values)
        CreateWord(values)
    }
    return (
        <Dialog>
        <DialogTrigger asChild><Button className="m-5">追加</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">新しい語句</DialogTitle>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="word"
          render={({ field }) => (
            <FormItem>
              <FormLabel>語句</FormLabel>
              <FormControl>
                <Input {...field} placeholder="学校" />
              </FormControl>
            </FormItem>

          )}
        />
        <FormField
          control={form.control}
          name="read"
          render={({ field }) => (
            <FormItem>
              <FormLabel>読み</FormLabel>
              <FormControl>
                <Input {...field} placeholder="がっこう"/>
              </FormControl>
            </FormItem>

          )}
        />
        <FormField
          control={form.control}
          name="page_num"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ページ数</FormLabel>
              <FormControl>
                <Input {...field} placeholder="120"/>
              </FormControl>
            </FormItem>

          )}
        />
        <FormField
          control={form.control}
          name="example"
          render={({ field }) => (
            <FormItem>
              <FormLabel>意味</FormLabel>
              <FormControl>
                <Input {...field} placeholder="教育を施すところ"/>
              </FormControl>
            </FormItem>

          )}
        />
        <div className="flex justify-center">
        <Button type="submit">追加</Button>
        </div>
      </form>
    </Form>

          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
}

export default CreateWordButton