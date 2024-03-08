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

const EditDialog = () => {

    const formSchema = z.object({
        username: z.string().min(2).max(50),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>本の名前</FormLabel>
              <FormControl>
                <Input placeholder="モモ" {...field} />
              </FormControl>
              <FormLabel>著者</FormLabel>
              <FormControl>
                <Input placeholder="ミヒャエル・エンデ" {...field} />
              </FormControl>
              <FormLabel>読了日</FormLabel>
              <FormControl>
                <DatePicker />
              </FormControl>
              <FormLabel>ジャンル</FormLabel>
              <FormControl>
                <Input placeholder="童話" {...field} />
              </FormControl>
              <FormMessage />
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