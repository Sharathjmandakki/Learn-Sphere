import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddLesson() {
const[course,setCourse]=useState("select course");
const[lname,setLname]=useState("");
const[ltopic,setLtopic]=useState("");
const[ldescription,setLDescription]=useState("");
const[lvedio,setLvedio]=useState("");
const[lattachment,setAttachment]=useState("");
  const addLesson = async(e) => {
    e.preventDefault();
    if(course===undefined || course===null){
      alert("plese select course")
    }else{
      try{
        const response=await axios.post("http://localhost:8080/addlesson",{
          name:lname,
          topic:ltopic,
          vedio:lvedio,
          attachment:lattachment,
          coursename:course,
          description:ldescription
        });
        if(response.data==="added"){
          alert(response.data)
          setAttachment("")
          setCourse("demo")
          setLtopic("")
          setLname("")
          setLvedio("")
          setLDescription("")
          // window.location.href="addlesson"
        }
        else{
          alert(response.data)
        }
      }catch(e){
        alert(e);
      }
  }
  }
  const [arr,setArr]=useState([]);
  useEffect(()=>{
      const getCourse=async()=>{
        try{
          const response=await axios.get("http://localhost:8080/mycources")
          setArr(response.data)
        }catch(e){
          console.log(e);
        }
      }
      getCourse()
  },[])
  return (
    <div className='overflow-hidden' style={{ minWidth: '300px' }}>
      <form class="max-w-sm mx-auto border p-10 m-20 mt-2" style={{ borderRadius: "10px" }} onSubmit={addLesson}>
      <marquee className="text-red-500 mb-10">⚠️ Course name and Lesson name are not modifiable after adding Lessons</marquee>
      <div class="mb-5">
          <label for="course" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add lesson to Course</label>
          <select id="course" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>setCourse(e.target.value)}>
           <option disabled defaultValue={"select course"}> Select Course </option>
           <option value={"demo"}> demo </option>
           {arr.map((e)=>(
            <option key={e.courseid} value={e.name}>{e.name}</option>
           ))}
          </select>
        </div>
        <div class="mb-5">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lesson name</label>
          <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Lesson name" required value={lname} onChange={e=>setLname(e.target.value)}/>
        </div> 
        <div class="mb-5">
          <label for="topic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lesson Topic</label>
          <input type="text" id="topic" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Lesson topic" required value={ltopic} onChange={e=>setLtopic(e.target.value)} />
        </div>
        <div class="mb-5">
          <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lesson Description</label>
          <input type="text" id="description" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Lesson topic" required value={ldescription} onChange={e=>setLDescription(e.target.value)} />
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
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Lesson</button>
        </div>
      </form>
    </div>

  )
}

