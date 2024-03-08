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
        pageNum: z.string(),
        example: z.string()
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            word: word.word,
            read: word.read,
            pageNum: word.pageNum,
            example: word.example
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
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
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>
            </FormItem>

          )}
        />
        <FormField
          control={form.control}
          name="pageNum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ページ数</FormLabel>
              <FormControl>
                <Input {...field} />
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

export default WordEditDialog