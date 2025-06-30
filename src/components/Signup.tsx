import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import axios from "axios";

export default function Signup() {
  const dispatch = useDispatch();
const [signUp, setSignUP] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password:""
});

const submitHandler = async(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();

const res = await axios.post("http://localhost:7777/signup",signUp);
console.log(res?.data);
dispatch(addUser(signUp));
console.log("signup data:", signUp);

// setSignUP({
//   firstName: "",
//   lastName: "",
//   email: "",
//   password:""
// });

// navigate("/login");

}



  return (
   <div className="bg-gradient-to-bl from-red-500 to-blue-500 flex justify-center items-center min-h-screen">
<div className="flex flex-col w-1/3 h-auto border-2 bg-gradient-to-b from-red-500 to-blue-500 opacity-70 ">
<div className="flex justify-center items-center m-5">
  <p className="text-4xl"> Sign Up </p>
 </div>
<form onSubmit={submitHandler}> 

<div className="flex flex-col">
  <label className="mx-5 "> First Name:  </label>
    <input type="text" placeholder="First Name" value={signUp?.firstName}
        onChange={(e)=>{setSignUP({...signUp, firstName:e.target.value })}}

    className="border bg-gray-500 text-2xl text-white px-2 py-1 mx-2 mt-1 mb-3"   />
</div>

<div className="flex flex-col">
  <label className="mx-5 "> Last Name:  </label>
    <input type="text" placeholder="Last Name" value={signUp?.lastName} 
    onChange={(e)=>{setSignUP({...signUp, lastName:e.target.value })}}
     className="border bg-gray-500 text-2xl text-white px-2 py-1 mx-2 mt-1 mb-3"   />
</div>

<div className="flex flex-col">
  <label className="mx-5 "> Email Id:  </label>
    <input type="text" placeholder="Email Address " value={signUp?.email}
        onChange={(e)=>{setSignUP({...signUp, email:e.target.value })}}

    className="border bg-gray-500 text-2xl text-white px-2 py-1 mx-2 mt-1 mb-3"   />
</div>

<div className="flex flex-col">
  <label className="mx-5 "> Password:  </label>
    <input type="text" placeholder="Password" value={signUp?.password}
        onChange={(e)=>{setSignUP({...signUp, password:e.target.value })}}

    className="border bg-gray-500 text-2xl text-white px-2 py-1 mx-2 mt-1 mb-3"   />
</div>
<div className="flex justify-center items-center">
   <button className="border text-2xl m-2 p-2 rounded-2xl active:bg-red-500" > Sign UP </button>
   </div>
</form>
<div className="flex m-3 mx-3 "> 
<p> Already Account!</p>
<Link to="/login"> 
<button className="mx-2 font-bold active:text-rose-500"> Log In Now </button>
 </Link>
</div>
</div>
    </div>
  )
}
