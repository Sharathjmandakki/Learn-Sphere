import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BackToolTip from '../inPage/BackToolTip';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const[username,setUsername]=useState();
    const[email,setEmail]=useState();
    const[role,setRole]=useState();
    useEffect(() => {
          const navElement = document.getElementById('nav');
          if (navElement) {
            navElement.style.display = 'none';
          }
          const user=async()=>{
            const res=await axios.get("http://localhost:8080/loginuser")
            setUsername(res.data.username);
            setEmail(res.data.email);
            setRole(res.data.role)
          }
          user()
          // Cleanup on component unmount
          return () => {
            // Restore the display property to its original value or set it to 'block' as needed
            if (navElement) {
              navElement.style.display = ''; // This will remove the 'display' property, reverting to the stylesheet value
            }
          };
        }, []);  
        const navigate = useNavigate();
        const goback=(e)=>{
            e.preventDefault()
            navigate(-1);
        }
  return (
    <div>
        <div className='overflow-hidden' style={{ minWidth: '300px' }}>        
      <form class="max-w-sm mx-auto border p-10 m-20 mt-10" style={{ borderRadius: "10px" }} onSubmit={goback}>
        <div className='flex flex-wrap justify-between gap-10'>
        <BackToolTip title={"home"}/>
            <h1 className='text-fuchsia-400 font-extrabold mb-5' style={{ fontSize: '30px', fontFamily: 'cursive' }}>About Me</h1></div>
        <div id='error' className='min-h-2 text-red-500'></div>
        <div class="mb-5">
          <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" value={email} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" disabled />
        </div>
        <div class="mb-5">
          <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
          <input type="text" value={username} id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name"disabled/>
        </div>
        <div class="mb-5">
          <label htmlFor="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your are a </label>
          <input type="text" value={role} id="role" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" disabled/>
        </div>
        <div className='flex justify-center'>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to Learn Sphere Home</button>
        </div>
      </form>
    </div>

        
    </div>
  )
}
