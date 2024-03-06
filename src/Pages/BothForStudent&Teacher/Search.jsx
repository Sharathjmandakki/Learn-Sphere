import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import payment from '../../Payment';

export default function Search() {
    const url = "https://img.freepik.com/free-photo/beautiful-mountain-landscape_23-2149063332.jpg";
    const [Searchcourse, setSearchCourse] = useState([]);
    const [searchname, setSearchName] = useState("");
    const [user ,setUser]=useState([]);
    useEffect(()=>{
       const loginuser=async()=>{
        try{
            const res=await axios.get("http://localhost:8080/loginuser")
            if(res.data!=null){
                setUser(res.data)
            }else{
                navigate("/entry",{ replace: true })
            }
            
        }catch(e){
            navigate("/entry",{ replace: true })
        }
       }
        loginuser()
    },[])
    
    const navigate=useNavigate()
    const handleClick=async(courseData)=>{
        if(user.username===courseData.uploadby||courseData.pay===true){
            navigate('/viewCourse', { state: {data:courseData} });
        }else{
            navigate('viewcourses', { state: {data:courseData} });
        }
    }
    const searchedCourses=async(e)=>{
            e.preventDefault();
            try {
                const response = await axios.post("http://localhost:8080/search", {
                    name: searchname
                });
                setSearchCourse(response.data)
                if (response.length == 0) {
                    document.getElementById("box").innerHTML = "No result found"
                }
            } catch (e) {
                console.log(e);
            }
        }
    return (
        <div className='m-2 p-2  justify-center'>
            <div className='flex justify-center mb-2 p-2 text-cyan-400 text-2xl'>Hi {user.username} 👋. Wellcome to Learn Sphere! </div>    
            <div className='flex justify-center'>
            <form className='min-w-80  justify-center' onSubmit={searchedCourses} style={{width:'800px'}}>
                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required value={searchname} onChange={e => setSearchName(e.target.value)} />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            </div>
            <br/>
            <div className='flex flex-wrap justify-center'>
                <div  id='box'></div>
                {
                    Searchcourse.map((courses) => (
                        <div class="m-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <button onClick={() => handleClick(courses)}>
                                <img class="p-8 rounded-t-lg" src={courses.url != null ? courses.url : url} alt="product image" />
                            </button>
                            <div class="px-5 pb-5">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{courses.name}</h5>
                                <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white"> ₹{courses.price} /-</span>
                            <div class="flex items-center mt-2.5 mb-5">
                                <span class="flex items-center bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{courses.rating}
                                <div class=" space-x-1 rtl:space-x-reverse p-2">
                                    {
                                        (courses.rating===0)?<svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>:<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>

                                    }
                                </div> 
                                </span>
                            </div>
                            </div>
                                {/* <div class="flex items-center justify-between">
                                    <span class="text-3xl font-bold text-gray-900 dark:text-white"> ₹{courses.price} /-</span>
                                    {((courses.pay)===false) ?
                                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>payment(courses)} id="rzp-button1">Pay</button>
                                    : <button disabled aria-disabled class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Paid</button>
                                    }
                                </div> */}
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
