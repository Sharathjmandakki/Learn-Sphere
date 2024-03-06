import React, { useEffect, useState } from 'react'
import { Outlet,Link, Navigate, useLocation } from 'react-router-dom';
import Footer from '../BothForStudent&Teacher/Footer';
import Settings  from '../inPage/Settings';
import axios from 'axios';
export default function Teacher() {
//   var data = useLocation().state.data;
    const [tb, setTb] = useState(0);
    const Togglebutton = () => {
        if (tb === 0) {
            setTb(1);
        } else {
            setTb(0)
        }
    }
    const [pg, setPg] = useState(0);
    const Home=()=>{
        setPg(0);
    }
    const MyCourses=()=>{
        setPg(1);
    }
    const PurchasedCourses=()=>{
        setPg(3);
    }
    const AddCourses=()=>{
        setPg(2);
    }
    const Help=()=>{
        setPg(4);
    }
    
    return (
        <div style={{ minWidth: "300px" }}>
            <header id='nav'>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="" className='flex justify-center'><div className='flex justify-center'><h1 className='font-extrabold mb-2 text-3xl text-center text-cyan-400 font-mono'>Learn Sphere | Teacher </h1></div></Link>
                    <button onClick={Togglebutton} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span> 
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class={tb === 0 ? "hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"} id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="" onClick={Home} class={pg===0?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="mycourse" onClick={MyCourses} class={pg===1?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>My Courses</Link>
                            </li>
                            <li>
                                <Link to="add" onClick={AddCourses} class={pg===2?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Add Courses</Link>
                            </li>
                            <li>
                                <Link to="course" onClick={PurchasedCourses} class={pg===3?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Purchased Courses </Link>
                            </li>
                            <li>
                                <Link to="help" onClick={Help} class={pg===5?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Contact / Help</Link>
                            </li>
                            <Settings/>
                        </ul>
                    </div>
                </div>
            </nav>
            </header>
            <Outlet/>
            <Footer/>
        </div>
    )
}