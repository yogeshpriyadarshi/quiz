import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { addUser } from "../utils/userSlice";
import UserAuth from "./UserAuth";

export default function Home() {
  const dispatch = useDispatch();
 const navigate = useNavigate();
 const user = useSelector((store:any)=>store.user);

  return (
    <>
    <UserAuth />
    <div> {user?.firstName} </div>
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
