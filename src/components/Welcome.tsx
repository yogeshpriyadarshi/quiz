import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="bg-gradient-to-bl from-red-500 to-blue-500 flex justify-center items-center min-h-screen">



<div> 
<p className="text-yellow-400 font-bold text-5xl ">Welcome to Quiz Platform</p>
<div className="flex"> 
    <div className="flex-1 m-5">   
<p className=" text-2xl"> Have Account!!! Sign In </p>
<Link to="/login">
<button className="border p-2 my-2 bg-red-500 rounded-2xl w-full active:bg-blue-500"> 
      Login    </button> </Link>
    </div>
<div className="flex-1 m-5">
<p className=" text-2xl px-10 "> NEW!!! Sign Up </p>
<Link to="/signup">  
<button className="border p-2 my-2 bg-red-500 rounded-2xl w-full active:bg-blue-500">   Sign Up </button>
</Link>
</div>

</div>
</div>
    </div>
  


  )
}
