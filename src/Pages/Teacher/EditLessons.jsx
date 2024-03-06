import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import BackToolTip from "../inPage/BackToolTip"
export default function EditLessons(props) {
  var data = useLocation().state.ldata;
  const[course,setCourse]=useState(data.coursename);
  const[lname,setLname]=useState(data.name);
  const[ltopic,setLtopic]=useState(data.topic);
  const[ldescription,setLDescription]=useState(data.description);
  const[lvedio,setLvedio]=useState(data.vedio);
  const[lattachment,setAttachment]=useState(data.attachment);
  const navigate=useNavigate();
    const updateLesson = async(e) => {
      e.preventDefault();
        try{
          const response=await axios.put("http://localhost:8080/updatelesson",{
            lessonid:data.lessonid,
            name:lname,
            topic:ltopic,
            vedio:lvedio,
            attachment:lattachment,
            coursename:course,
            description:ldescription
          });
          if(response.data==="updated"){
            alert(response.data)
            navigate(-2);
          }
          else{
            alert(response.data)
          }
        }catch(e){
          alert(e);
        }
    }  
    return (
      <div class=" overflow-hidden max-w-sm mx-auto border p-10 m-20 mt-2" style={{ minWidth: '300px', borderRadius: "10px" }}>
      <div className='flex justify-between '>
        <BackToolTip title="go back Course page" />
        <h1 className='text-fuchsia-400 font-extrabold mb-5' style={{ fontSize: '30px', fontFamily: 'cursive' }}>Edit Lessons </h1></div>
      <form onSubmit={updateLesson}>
       <div class="mb-5">
            <label for="course" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course name</label>
            <input disabled type="text" id="course" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Lesson name" required value={course} onChange={e=>setCourse(e.target.value)}/>
          </div>
          <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lesson name</label>
            <input disabled type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Lesson name" required value={lname} onChange={e=>setLname(e.target.value)}/>
          </div> 
          <div class="mb-5">
            <label for="topic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lesson Topic</label>
            <input type="text" id="topic" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Lesson topic" required value={ltopic} onChange={e=>setLtopic(e.target.value)} />
          </div>
          <div class="mb-5">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lesson Description</label>
            <input type="text" id="description" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Lesson Description" required value={ldescription} onChange={e=>setLDescription(e.target.value)} />
          </div>
          <div class="mb-5">
            <label for="vedio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lesson vedio</label>
            <input type="text" id="vedio" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Lesson vedio url" required value={lvedio} onChange={e=>setLvedio(e.target.value)}/>
          </div>
          <div class="mb-5">
            <label for="attachment" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lesson attachment</label>
            <input type="text" id="attachment" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Lesson attachment url" required value={lattachment} onChange={e=>setAttachment(e.target.value)}/>
          </div>
          <div className='flex justify-center'>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Lesson</button>
          </div>
        </form>
      </div>
    )
}  