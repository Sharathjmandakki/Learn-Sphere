import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import BackToolTip from '../inPage/BackToolTip';
export default function ViewCourse(props) {
  const url = "https://img.freepik.com/free-photo/beautiful-mountain-landscape_23-2149063332.jpg";
  var data = useLocation().state.data;
  const [prerequisite, setPrerequisite] = useState(data.prerequisite.split(","))
  useEffect(() => {
    const navElement = document.getElementById('nav');
    if (navElement) {
      navElement.style.display = 'none';
    }
    // Cleanup on component unmount
    return () => {
      if (navElement) {
        navElement.style.display = '';
      }
    };
  }, []);
  const navigate = useNavigate();
  //lessons
  const lesson = (lesson) => {
    // alert(lesson)
    navigate('/lesson', { state: { ldata: lesson } });
  }

  const editlesson=(lesson)=>{
    navigate('/editLesson', { state: { ldata: lesson } }); 
  }
  return (
    <div className='flex flex-wrap justify-between p-2 m-2 gap-5'>
      <div class="overflow-auto min-w-80 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700" style={{ width: '70%' }}>
        <div className='flex flex-wrap justify-between gap-10'>
          <BackToolTip title="Courses" />
          <h5 class="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
            <p class="w-full sm:w-auto bg-gray-800 text-white rounded-lg inline-flex items-center justify-center p-3 m-1 dark:bg-gray-700">
              {data.name} </p></h5>
        </div>
        <hr className='mt-2 mb-2' />
        <div className='flex flex-wrap pt-10 pb-10'>
          <img class="rounded-t-lg" src={data.url != null ? data.url : url} alt="product image" style={{ width: '65%' }} />
          <div class="pl-10 min-w-30 justify-between p-4 leading-normal" style={{ width: '30%', textAlign: 'justify' }}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.category}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.rating}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.uploadby}</p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {/* prerequisite : */}
          <p class="w-full sm:w-auto bg-gray-300 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center p-2 m-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            Prerequisite :
          </p>
          {
            prerequisite.map((p) => (
              <p class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center p-2 m-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                {p}
              </p>
            ))
          }
        </div>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 justify-normal">{data.description}</p>
      </div>
      <div className='w-1/4 overflow-auto min-w-80 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700'>
        <ul>
          <li className='mb-2 justify-center '>
            <h1 class="flex-1 text-zinc-100 ms-3 text-center text-2xl font-bold whitespace-nowrap overflow-hidden ">📓 Lessons </h1><br /><hr /></li>
          {
            data && data.lessons && data.lessons.map((e) => (
              <li className='mb-2'>
                <button onClick={() => lesson(e)} class="flex w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
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