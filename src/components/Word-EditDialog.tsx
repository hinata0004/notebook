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

import { Word } from "@/types/Book"

const WordEditDialog = ({word}: {word: Word}) => {
  const formSchema = z.object({
    word: z.string().min(2).max(50),
    read: z.string(),
    page_num: z.string(),
    example: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        word: word.word,
        read: word.read,
        page_num: word.page_num,
        example: word.example
      }
  })

  const CreateWord = async (values: z.infer<typeof formSchema>) => {
    const result = await fetch(`https://93a4-131-206-225-158.ngrok-free.app/api/word/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values)
    })
    if (result.status !== 200) {
      alert("更新に失敗しました")
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
      <DialogTrigger asChild><Button variant="outline" className="w-32">編集</Button></DialogTrigger>
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
      <Button type="submit">編集</Button>
      </div>
    </form>
  </Form>

        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default WordEditDialog