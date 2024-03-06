import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Update() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate(); 
  const updateyourpass=(name)=>{
    navigate('/entry/updatepassword', { state: { data: name } });
  }
  const getUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/getname", { email: email, })
      if(response.data==null || response.data==="not found" ){
        document.getElementById("error").innerHTML=response.data
      }else{
        updateyourpass(response.data);
      }
    } catch (error) {
      document.getElementById("error").innerHTML="error"
    }
  }
  return (
    <div className='overflow-hidden' style={{ minWidth: '300px' }}>

      <div class="mb-5">
        <form class="max-w-sm mx-auto border p-10 m-20 mt-10" style={{ borderRadius: "10px" }} onSubmit={getUser}>
          <div className='flex justify-center'>
            <h1 className='text-fuchsia-400 font-extrabold mb-5' style={{ fontSize: '30px', fontFamily: 'cursive' }}>Verify User</h1>
          </div>
          <div className='flex justify-between'>
          <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <div id='error' className='min-h-2 text-red-500'></div>
          </div>
          <div class="relative ">
            <input type="email" value={email} id="email" class="p-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required onChange={e => setEmail(e.target.value)} />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >get</button>
          </div>
        </form>
      </div>
    </div>
  )
}
