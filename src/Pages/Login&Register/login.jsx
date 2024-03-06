import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate()
  const login=async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
      username:email,
       email: email,
       password:password,
      })
      const res=await axios.get("http://localhost:8080/loginuser")
      if(response.data==="Student"){
        // window.location.href="/"
        navigate("/",{ replace: true })
      }
      else if(response.data==="Teacher"){
        // window.location.href="/trainer/"
        navigate("/trainer/",{ replace: true })
      }else{
        document.getElementById("error").innerHTML=response.data
      }
    }catch(e){
      document.getElementById("error").innerHTML="Server Error"
    }
}
  return (
    <div style={{minWidth:'300px'}}>
    <form class="max-w-sm mx-auto border p-10 m-20 mt-10" style={{borderRadius:"10px"}} onSubmit={login}>
    <div className='flex justify-center'><h1 className='text-fuchsia-400 font-extrabold mb-5'style={{fontSize:'30px', fontFamily:'cursive'}}>Login Page</h1></div>
<div id='error' className='min-h-2 text-red-500'></div>
    <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username / email</label>
        <input type="text" value={email} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name / name@gmail.com" required onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input type="password" value={password} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required  onChange={e=>setPassword(e.target.value)}/>
    </div>
    <div className='flex justify-center'>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
    </div>
    <div className='mt-5'><a href="/entry/update" className='text-yellow-100 pt-2'>Forgot password</a></div>
    </form>
    </div>
  )
}
