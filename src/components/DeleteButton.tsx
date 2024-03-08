import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"


const DeleteButton = () => {
    const handleDelete = () =>{
        const isConfirmed = window.confirm("本当に削除しますか？")

        if (isConfirmed){
            deleteItem()
        }
    }

    const deleteItem = () => {
        console.log("delete item!!")
    }
    return (
        <Button variant="outline" className="w-32" onClick={handleDelete}>削除</Button>
    )
}

export default DeleteButton