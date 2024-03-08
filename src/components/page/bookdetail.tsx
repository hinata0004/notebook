import { useParams } from "react-router-dom";
import WordScroll from "../Word-Scroll"
import CreateWordButton from "../Create-WordButton";

export default function Bookdetail(){
    const { id } = useParams()
    return (
      <div className="text-center">
        <h1 className=" text-5xl font-bold mt-10 mb-10">単語帳</h1>
        <CreateWordButton id={id!}/>
        <div className=" text-center flex justify-center">
          <WordScroll id={id!}/>
        </div>
      </div>
    )
}