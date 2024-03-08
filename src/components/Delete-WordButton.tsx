import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"

import { useNavigate } from "react-router-dom"


const DeleteWordButton = ({id}: {id: string}) => {
    const navigate = useNavigate()
    const handleDelete = () =>{
        const isConfirmed = window.confirm("本当に削除しますか？")

        if (isConfirmed){
            deleteItem()
        }
        window.location.href = "/"
    }

    const deleteItem = async() => {
        const result = await fetch(`http://localhost:8000/api/word/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (result.status !== 200) {
            alert("削除に失敗しました")
        }
        console.log("delete item!!")
    }
    return (
        <Button variant="outline" className="w-32" onClick={handleDelete}>削除</Button>
    )
}

export default DeleteWordButton