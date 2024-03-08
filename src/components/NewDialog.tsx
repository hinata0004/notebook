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

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const NewDialog = () => {

  const formSchema = z.object({
    title: z.string().min(2).max(50),
    author: z.string(),
    date: z.string(),
    ganre: z.string()
})


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            author: "",
            date: "",
            ganre: ""
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <Dialog>
        <DialogTrigger asChild><Button variant="outline" className="w-32">追加</Button></DialogTrigger>
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
          name="ganre"
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
        <Button type="submit">追加</Button>
        </div>
      </form>
    </Form>

          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
}

export default NewDialog