import { useNavigate } from "react-router-dom"

export default function Home() {
 const navigate = useNavigate();
  return (
    <>
    <div className="bg-gradient-to-bl from-red-500 to-blue-500 flex justify-center items-center min-h-screen" >
  <div  className=" h-1/4 w-1/4 cursor-pointer">
  <button className="cursor-pointer"
   onClick={ ()=>{navigate("/addpracticequestion")}}
  > Add Practice Question </button>
  </div>

  <div className=" h-1/4 w-1/4 cursor-pointer" > 
   <button className="cursor-pointer"
   onClick={ ()=>{navigate("/generatetest")}}
   >   Generate Test </button>
  </div>
    </div>
    </>
  )
}
