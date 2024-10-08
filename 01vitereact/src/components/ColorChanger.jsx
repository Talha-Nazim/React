import { useState } from "react"

const ColorChanger = () => {
    const [color, setColor] = useState("olive")
    return (
        // <div className={`w-full h-screen duration-200 bg-${color}`}
        // //  style={{backgroundColor: color}}
        // >
        // </div>
        <div className="w-full h-screen duration-200"
         style={{backgroundColor: color}}
        >
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap rounded-xl justify-center gap-3 shadow-lg bg-white px-3 py-2">
                    <button className="outline-none px-4 bg-red-700 rounded-md shadow-xl text-white" 
                    onClick={() => setColor("red")}
                    >Red</button>
                    <button className="outline-none px-4 bg-blue-700 rounded-md shadow-xl text-white" 
                    onClick={() => setColor("blue")}
                    >Blue</button>
                    <button className="outline-none px-4 bg-green-700 rounded-md shadow-xl text-white" 
                    onClick={() => setColor("green")}
                    >Green</button>
                    <button className="outline-none px-4 bg-purple-700 rounded-md shadow-xl text-white" 
                    onClick={() => setColor("purple")}
                    >Purple</button>
                </div>
            </div>

        </div>
    )
}

export default ColorChanger