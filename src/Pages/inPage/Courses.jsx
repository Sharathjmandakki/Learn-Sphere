import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import payment from '../../Payment'
export default function Courses(props) {
  const url = "https://img.freepik.com/free-photo/beautiful-mountain-landscape_23-2149063332.jpg";
  var data = useLocation().state.data;
  const arr = data.lessons;
  const prerequisite = data.prerequisite
  const pre = prerequisite.split(". ")
  return (
    <div className='flex flex-wrap justify-between p-2 m-2 gap-5'>
      <div class="overflow-auto min-w-64 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700" style={{ width: '70%' }}>
      <div className='flex justify-between'>
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{data.name} </h5>
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>payment(data)} id="rzp-button1">Pay</button>                            
        </div>                            
        <div className='flex flex-wrap'>
          {/* prerequisite */}
          <p class="w-full sm:w-auto bg-gray-300 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center p-2 m-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            Prerequisite :
          </p>
          {
            pre.map((p) => (
              <p class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center p-2 m-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                {p}
              </p>
            ))
          }
        </div>
        <div className='flex flex-wrap pt-10 pb-10'>
          <img class="rounded-t-lg" src={data.url != null ? data.url : url} alt="product image" style={{ width: '65%' }} />
          <div class="pl-10 min-w-30 justify-between p-4 leading-normal" style={{ width: '30%', textAlign: 'justify' }}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.category}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.rating}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.uploadby}</p>
          </div>
        </div>



        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 justify-normal">{data.description}</p>

      </div>
      <div className='w-1/4 overflow-auto min-w-14 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700'>
        <ul>
          <li className='mb-2 justify-center '>
            <h1 class="flex-1 text-zinc-100 ms-3 text-center text-2xl font-bold whitespace-nowrap overflow-hidden ">📓 Lessons </h1><br /><hr /></li>
          {
            arr.map((e) => (
              <li className='mb-2'>
                <button disabled class="flex w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <span class="flex-1 ms-3 whitespace-nowrap overflow-hidden">{e.name}</span>
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

