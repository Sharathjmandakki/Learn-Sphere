import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function MyCourses() {
    const url = "https://img.freepik.com/free-photo/beautiful-mountain-landscape_23-2149063332.jpg";
    const [course, setCourse] = useState([]);
    useEffect(() => {
        const getAllCourses = async () => {
            try {  
                document.getElementById("box").innerHTML=""
                const response = await axios.get("http://localhost:8080/mycources");
                setCourse(response.data)
                if(response.data.length===0){                    
                    document.getElementById("box").innerHTML="<div class='min-h-96 m-24 text-4xl text-slate-400'>You haven't uploded any courses if yes plese refresh 🔃. or ask help in help page 🫙  </div>"
                }
            } catch (e) {
                document.getElementById("box").innerHTML="<div class='min-h-96 m-24 text-4xl text-slate-400'>404 Error<div className='flex justify-center'><hr/><a href='/entry/login' class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Go to Login page</a></div></div>"
                console.log(e);
            }
        }
        getAllCourses()
        
    }, []);

    const navigate=useNavigate();
    const handleClick=(courseData)=>{
        navigate('/viewtcourse', { state: {data:courseData} });
    }
    const editCourse=(courseData)=>{
        navigate('/editCourse', { state: {data:courseData} });
    }
    return (
        <div className='p-2 flex-wrap flex justify-center' id='box'>
            {
                course.map((courses) => (
                    <div class="m-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <button onClick={()=>handleClick(courses)}>
                            <img class="p-8 rounded-t-lg" src={courses.url != null ? courses.url : url} alt="product image" />
                        </button>
                        <div class="px-5 pb-5">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{courses.name}</h5>
                            <div class="flex items-center mt-2.5 mb-5">
                                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{courses.rating}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white"> ₹{courses.price} /-</span>
                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{editCourse(courses)}}>Edit Your course</button>    
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    );
}