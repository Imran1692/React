import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="h-screen w-full " style={{ backgroundColor: color }}>
      <p className="flex justify-center text-center text-black font-bold text-5xl tracking-normal "> Tap the button to apply a new background color.  </p>
      <div className="flex flex-wrap justify-center bottom-12 fixed inset-x-0 px-2">
        <div className="flex flex-wrap gap-2 bg-amber-200 px-2 py-1 rounded-2xl ">
          <button onClick={() => setColor("pink")} className=" text-black rounded-2xl cursor-pointer  outline-none px-4 shadow-lg  " style={{ backgroundColor:"pink"}}>pink</button>
          <button onClick={() => setColor("red")} className=" text-black rounded-2xl cursor-pointer  outline-none px-4 shadow-lg  " style={{ backgroundColor:"red"}}>red</button>
          <button onClick={() => setColor("green")} className=" text-black rounded-2xl cursor-pointer  outline-none px-4 shadow-lg  " style={{ backgroundColor:"green"}}>green</button>
          <button onClick={() => setColor("blue")} className=" text-black rounded-2xl cursor-pointer  outline-none px-4 shadow-lg  " style={{ backgroundColor:"blue"}}>blue</button>
          <button onClick={() => setColor("purple")} className=" text-black rounded-2xl cursor-pointer  outline-none px-4 shadow-lg  " style={{ backgroundColor:"purple"}}>purple</button>
          <button onClick={() => setColor("White")} className=" text-black rounded-2xl  cursor-pointer outline-none px-4 shadow-lg  " style={{ backgroundColor:"white"}}>White</button>
          <button onClick={() => setColor("gray")} className=" text-black rounded-2xl cursor-pointer  outline-none px-4 shadow-lg  " style={{ backgroundColor:"gray"}}>gray</button>
          <button onClick={() => setColor("yellow")} className=" text-black rounded-2xl  cursor-pointer outline-none px-4 shadow-lg  " style={{ backgroundColor:"yellow"}}>yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
