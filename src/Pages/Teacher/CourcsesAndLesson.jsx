import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function CourcsesAndLesson() {
    const [cpg, setCpg] = useState(1);
    const [data,setdata]=useState();
    const handel1 = () => {
        setCpg(0)
    }
    const handel2 = () => {
        setCpg(1)
    } 

    useEffect(()=>{
        const data=async()=>{
            const response= await axios.get("http://localhost:8080/user");
            setdata(response.data)
        }
        data()
    })

    return (
    <div>
         <div style={{minWidth:"300px"}}>
            <div class="w-full text-center text-xl mt-5 text-fuchsia">
                <div class="grid max-w-sm grid-cols-2 gap-3 p-2 mx-auto bg-gray-100 rounded-lg dark:bg-gray-600" role="group">
                    <Link to="addcourses" onClick={handel1} class={cpg === 0 ? "px-5 p-10 py-1.5 font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg" : "px-5 py-1.5 font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg"}>
                        <p className='text-fuchsia'>Add Course</p>
                    </Link>
                    <Link to="addlesson" onClick={handel2} class={cpg === 1 ? "px-5 p-10 py-1.5 font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg" : "px-5 py-1.5 font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg"}>
                    <p className='text-fuchsia'>Add Lesson</p>
                    </Link>
                </div>
            </div>
            {
                (data==null)?<div class='min-h-96 m-24 text-4xl text-center text-slate-400'>Error occured<div className='flex justify-center'><a href='/entry/login' class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-4'>Go to Login page</a></div></div>:<Outlet />
            }
            
        </div>
    </div>
       
    )
}
