import React from "react";
import UserAuth from "./UserAuth";

export default function AddQuestion() {
  return (
    <>
    <UserAuth />
      <div className="w-200" >
        <div className="flex flex-col"> 
          <label> Add question </label>
          <textarea  className="bg-white m-2" >  </textarea>
          <label>  option 1 <input className="bg-white m-2 "  /> </label>
          <label>  option 2 <input className="bg-white m-2 "  /> </label>
          <label>  option 3 <input className="bg-white m-2 "  /> </label>
          <label>  option 4 <input className="bg-white m-2 "  /> </label>
        </div>
        <div> Add More Question </div>
      </div>
    </>
  )
}
