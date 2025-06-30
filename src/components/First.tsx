import { Outlet } from "react-router-dom";

export default function First() {
  return (
    <div className="bg-gradient-to-bl from-red-500 to-blue-500 flex justify-center items-center min-h-screen">
<Outlet/>
    </div>

    
  )
}
