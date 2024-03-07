import { Button } from "@/components/ui/button"
import Scroll from "./components/Scroll"
import Book from "./components/Book"

export default function App() {
  return (
    <div className="text-center">
      <h1 className=" text-5xl font-bold mt-10">読書ノート</h1>
      <Scroll />
    </div>
  )
}
