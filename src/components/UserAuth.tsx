import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';

export default function UserAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store:any)=>store.user);
    const fetchUser = async()=>{
        try{
           const user = await axios.get("http://localhost:7777/user",{withCredentials:true});
           console.log("all user",user);
           if(!user){
            navigate("/login");
           }else{
            console.log(user?.data);
            dispatch(addUser(user?.data));
           }
        }catch(err){

            console.error(err);
            navigate("/login");
        }   
    }

    useEffect( ()=>{
        if(!user)
        fetchUser();
    },[]  )
  return (
    <></>
  )
}
