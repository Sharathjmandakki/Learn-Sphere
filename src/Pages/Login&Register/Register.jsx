import axios from 'axios';
import React, { useState } from 'react'
import ToastSuccess from '../BothForStudent&Teacher/ToastSuccess'
import ToastFailure from '../BothForStudent&Teacher/ToastFailure'
export default function Register() {
  const roles = ["Student", "Teacher"]
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");

  const addUser = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/adduser", {
        username: name,
        email: email,
        password: password,
        role: role
      })
      if (response.data==="user added") {
        window.location.href = "login"
      } else {
        document.getElementById("error").innerHTML=response.data
      }
    } catch (e) {
      document.getElementById("error").innerHTML="Server Error"
    }
  }
  return (
    <div className='overflow-hidden' style={{ minWidth: '300px' }}>
      <form class="max-w-sm mx-auto border p-10 m-20 mt-10" style={{ borderRadius: "10px" }} onSubmit={addUser}>
        <div className='flex justify-center'><h1 className='text-fuchsia-400 font-extrabold mb-5' style={{ fontSize: '30px', fontFamily: 'cursive' }}>Register Page</h1></div>
        <div id='error' className='min-h-2 text-red-500'></div>
        <div class="mb-5">
          <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" value={email} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required onChange={e => setEmail(e.target.value)} />
        </div>
        <div class="mb-5">
          <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
          <input type="text" value={name} id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required onChange={e => setName(e.target.value)} />
        </div>
        <div class="mb-5">
          <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" value={password} id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required onChange={e => setPassword(e.target.value)} />
        </div>
        <div class="mb-5">
          <label htmlFor="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your role</label>
          <select id="role" value={role} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => { setRole(e.target.value) }}>
            {roles.map((r) => (
              <option key={r} >{r}</option>
            ))}
          </select>
        </div>
        <div className='flex justify-center'>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register to Learn Sphere</button>
        </div>
      </form>
    </div>
  )
}
