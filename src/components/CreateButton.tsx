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

const EditDialog = () => {
    const navigate = useNavigate()
    const formSchema = z.object({
      title: z.string().min(2).max(50),
      author: z.string(),
      date: z.string(),
      genre: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const CreateBook = async (body: z.infer<typeof formSchema>) => {
      const result = await fetch("http://localhost:8000/api/book", {
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
        CreateBook(values)
    }
    return (
        <Dialog>
        <DialogTrigger asChild><Button className="m-5">追加</Button></DialogTrigger>
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
                <Input {...field} placeholder="モモ" />
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
                <Input {...field} placeholder="ミヒャエル・エンデ"/>
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
                <Input {...field} placeholder="2024-03-08"/>
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
                <Input {...field} placeholder="童話"/>
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

export default EditDialog