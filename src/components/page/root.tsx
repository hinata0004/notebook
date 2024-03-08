import Scroll from "../Scroll"
import CreateButton from "../CreateButton"


export default function Root() {

    return (
        <div className="text-center">
            <h1 className=" text-5xl font-bold mt-10">読書ノート</h1>
            <CreateButton />

            <div className=" text-center flex justify-center">
                <Scroll />
            </div>
        </div>
    )
}
