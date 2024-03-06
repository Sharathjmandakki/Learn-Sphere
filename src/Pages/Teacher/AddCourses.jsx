import axios from 'axios';
import React, { useState } from 'react'

export default function AddCourses() {
const[name,setName]=useState('');
const[prerequisite,setPrerequisite]=useState('');
const[description,setDescription]=useState('');
const[price,setPrice]=useState('');
const[category,setCategory]=useState('');
const[imgurl,setImgurl]=useState('');
  const addCourses = async(e) => {
    e.preventDefault();
    try{
      alert(name+" "+price+" "+prerequisite+" "+description+" "+category)

      const response=await axios.post("http://localhost:8080/addcourses",{
        name:name,
        prerequisite:prerequisite,
        description:description,
        price:price,
        category:category,
        url:imgurl,
      })
      console.log(response);
      if(response.data==="added"){
        window.location.href="addlesson";
      }else{
        alert(response.data)
      }
    }catch(e){
      alert(e);
    }
  }
  return (
    <div className='overflow-hidden' style={{ minWidth: '300px' }}>
      <form class="max-w-sm mx-auto border p-10 m-20 mt-2" style={{ borderRadius: "10px" }} onSubmit={addCourses}>
      <marquee className="text-red-500 mb-10">⚠️ Course name and price are not modifiable after adding course</marquee>
      
        <div class="mb-5">
          <label for="Coursename" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course name</label>
          <input value={name} type="text" id="Coursename" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required onChange={e=>setName(e.target.value)}/>
        </div>
        <div class="mb-5">
          <label for="Prerequisite" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Prerequisite</label>
          <input value={prerequisite} type="text" id="Prerequisite" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Prerequisite ex:[java. Spring Boot. React]  " required onChange={e=>setPrerequisite(e.target.value)}/>
        </div>
        <div class="mb-5">
          <label for="Description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Description</label>
          <textarea value={description} type="text" id="Description" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Description" required onChange={e=>setDescription(e.target.value)}/>
        </div>
        <div class="mb-5">
          <label for="Price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Price</label>
          <input type="number" value={price} id="Price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Price" required onChange={e=>setPrice(e.target.value)}/>
        </div>
        <div class="mb-5">
          <label for="Category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Category</label>
          <input value={category} type="text" id="Category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Category" required onChange={e=>setCategory(e.target.value)}/>
        </div>
        <div class="mb-5">
          <label for="Category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Image</label>
          <input value={imgurl} type="text" id="Category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Image url" required onChange={e=>setImgurl(e.target.value)}/>
        </div>
        <div className='flex justify-center'>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Course</button>
        </div>
      </form>
    </div>
  )
}
