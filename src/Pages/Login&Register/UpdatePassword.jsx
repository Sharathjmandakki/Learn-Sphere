import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function UpdatePassword() {
    var data = useLocation().state.data;
  const [name, setName] = useState(data);
  const [password, setPassword] = useState("");
  const [rpassword, setRPassword] = useState("")
  const update = async(e) => {
    e.preventDefault();
    if (password === rpassword) {
        try{
            const response=await axios.put("http://localhost:8080/update",{
                email:name,
                password:password
            });
            if(response.data==="updated"){
                window.location.href="/entry"
            }else{
                document.getElementById("error").innerHTML = response.data 
            }
        }catch(e){
            document.getElementById("error").innerHTML = "Somting went wrong 500"
        }

    } else {
      document.getElementById("error").innerHTML = "new password and renterd password are't same "
    }

  }
    return (
        <div className='overflow-hidden' style={{ minWidth: '300px' }}>
            <form class="max-w-sm mx-auto border p-10 m-20 mt-10" style={{ borderRadius: "10px" }} onSubmit={update}>
            <div className='flex justify-center'><h1 className='text-fuchsia-400 font-extrabold mb-5' style={{ fontSize: '30px', fontFamily: 'cursive' }}>Update Page</h1></div>
            <div id='error' className='min-h-2 text-red-500'></div>
            <div class="mb-5">
                <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                <input type="text" disabled value={name} id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required onChange={e => setName(e.target.value)} />
            </div>
            <div class="mb-5">
                <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                <input type="password" value={password} id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required onChange={e => setPassword(e.target.value)} />
            </div>
            <div class="mb-5">
                <label htmlFor="rpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Renter password</label>
                <input type="password" value={rpassword} id="rpassword" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required onChange={e => setRPassword(e.target.value)} />
            </div>
            <div className='flex justify-center'>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">update Password</button>
            </div>
        </form>
        </div>
    )
}
