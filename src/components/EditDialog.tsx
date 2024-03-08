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
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import { Book } from "@/types/Book"

const EditDialog = ({book}: {book: Book}) => {

    const formSchema = z.object({
        title: z.string().min(2).max(50),
        author: z.string(),
        date: z.string(),
        genre: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: book.title,
            author: book.author,
            date: book.date,
            genre: book.genre
        },
    })

    const UpdateBook = async(values: z.infer<typeof formSchema>) => {
      const body = {
        id: book.id,
        ...values
      }
      const result = await fetch("https://93a4-131-206-225-158.ngrok-free.app/api/book", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "1"
        },
        body: JSON.stringify(body)
      })

      if(result.status !== 200) {
        alert("更新に失敗しました")
      }

      window.location.href = "/"
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        UpdateBook(values)
    }
    return (
        <Dialog>
        <DialogTrigger asChild><Button variant="outline" className="w-32">編集</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">新しい本</DialogTitle>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>本の名前</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>

          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>著者</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>

          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>読了日</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>

          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ジャンル</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>

          )}
        />
        <div className="flex justify-center">
          <Button type="submit">編集</Button>
        </div>
      </form>
    </Form>

          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
}

export default EditDialog