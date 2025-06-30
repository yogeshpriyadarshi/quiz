import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
const [logIn, setLogIn] = useState({
  email:"",
  password:""
});
const submitHandler = async(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
console.log("login data:", logIn);
}


  return (

    <div className="bg-gradient-to-bl from-red-500 to-blue-500 flex justify-center items-center min-h-screen">

<div className="flex flex-col w-1/3 h-auto border-2 bg-gradient-to-b from-red-500 to-blue-500 opacity-70 ">
<div className="flex justify-center items-center m-5">
  <p className="text-4xl"> Log In  </p>
 </div>
<form  onSubmit={submitHandler}> 
<div className="flex flex-col">
  <label className="mx-5 "> Email Id:  </label>
    <input type="text" placeholder="Email Address " value={logIn?.email}
    onChange={(e)=>{setLogIn({...logIn, email:e.target.value})}}
    className="border bg-gray-500 text-2xl text-white px-2 py-1 mx-2 mt-1 mb-3"   />
</div>

<div className="flex flex-col">
  <label className="mx-5 "> Password:  </label>
    <input type="text" placeholder="Password" value={logIn?.password}
        onChange={(e)=>{setLogIn({...logIn, password:e.target.value})}}

    className="border bg-gray-500 text-2xl text-white px-2 py-1 mx-2 mt-1 mb-3"   />
</div>
<div className="flex justify-center items-center">
   <button className="border text-2xl m-2 p-2 rounded-2xl active:bg-red-500" > Log In  </button>
   </div>
</form>
<div className="flex m-3 mx-3"> 
<p> New to Quiz !</p>
<Link to="/signup"> 
<button className="mx-2 font-bold active:text-rose-500"> Sign up Now </button>
 </Link>
</div>
</div>


    </div>



  )
}
