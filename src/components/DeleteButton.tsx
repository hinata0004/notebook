import { Button } from "./ui/button"


const DeleteButton = ({id}: {id: string}) => {
    const handleDelete = () =>{
        const isConfirmed = window.confirm("本当に削除しますか？")

        if (isConfirmed){
            deleteItem()
        }
        window.location.href = "/"
    }

    const deleteItem = async() => {
        const result = await fetch(`https://93a4-131-206-225-158.ngrok-free.app/api/book/${id}`, {
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

export default DeleteButton