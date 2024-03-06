import React, { useEffect, useState } from 'react'
import {Navigate, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import BackToolTip from './BackToolTip';
import axios from 'axios';
export default function Lessons(props) {
  const arr=[1,2,3,4,5]
  
  var data = useLocation().state.ldata;
  const[discussion,setDiscussion]=useState([])
  const[url,setUrl]=useState("");
  const[vediolink,setVediolink]=useState("");
    useEffect(() => {
      const getuser=async()=>{
        const response =await axios.post("http://localhost:8080/getLesson",{
        lessonid:(data.lessonid),
      });
      setDiscussion(response.data.discussion)
      }
      
      getuser()
      setUrl(data?.vedio)
      setDiscussion(data?.discussion);
      const arr=url.split("https://www.youtube.com/watch?v=")
        setVediolink(arr[1])
        const navElement = document.getElementById('nav');
        if (navElement) {
          navElement.style.display = 'none';
        }
        return () => {
          // Restore the display property to its original value or set it to 'block' as needed
          if (navElement) {
            navElement.style.display = ''; // This will remove the 'display' property, reverting to the stylesheet value
          }
        };
      }, []);  
    const[message,setMessage]=useState("");
    const comment = async(e)=>{
      e.preventDefault();
      try{
        const response =await axios.put("http://localhost:8080/message",{
        coursename:data.coursename,
        lessonid:data.lessonid,
        name:message
      });
      if(response.data==="sent"){
        setMessage("")
        document.getElementById("success").innerHTML="Sent"
        window.location.href="/lesson"
      }else{
        document.getElementById("success").innerHTML="Failed"
      }
      }catch(error){
        console.error(error);
      }
    }

  return (
    <div className='flex flex-wrap justify-between p-2 m-2 gap-5 '>
        {/* <marquee className="text-cyan-200">⚠️ click go back button to navigate course page</marquee> */}
      <div class="overflow-auto min-w-64 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700" style={{width:'70%'}}>
     <div className='flex flex-wrap justify-between gap-10'>
        <BackToolTip title={data.coursename}/>
     <h5 class="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
     <p class="w-full sm:w-auto bg-gray-800 text-white rounded-lg inline-flex items-center justify-center p-3 m-1 dark:bg-gray-700">
        {data.name}
        </p></h5>
    </div> 
    <h1 class="flex-1 text-zinc-100 ms-3 text-center text-2xl font-bold whitespace-nowrap overflow-hidden mb-1 ">📖{data.topic}</h1><hr/>
    <div className='flex justify-center flex-wrap pt-10 pb-10'>
    <iframe width="920" height="480" style={{borderRadius:'10px'}} 
    src={"https://www.youtube.com/embed/"+{}}
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen" allowfullscreen></iframe>
    </div>
    <div className='flex flex-wrap justify-between text-justify' >
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 justify-normal">{data.topic} : {data.description}</p>
    {
        (data.attachment==null)?null:
    <a href={data.attachment} class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">📄 Download attachment</a>
    }</div>

     </div>
      <div style={{minWidth:'26%'}} className='overflow-auto min-w-14 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 '>
        <ul className='relative justify-evenly '>
        <li className='mb-2 justify-center '>
            <h1 class="flex-1 text-zinc-100 ms-3 text-center text-2xl font-bold whitespace-nowrap overflow-hidden ">📢 Discussion </h1><br /><hr />
        </li>
        <li style={{minHeight:'600px', maxHeight:"600px",overflow:'auto',marginTop:'10px'}}>
          {
            discussion?discussion.map((e) => (
              <div className='mb-2'>
                <p style={{borderTopLeftRadius:"20px",borderTopRightRadius:"30px",borderBottomRightRadius:"30px"}} class="flex w-full  items-center p-3 text-base font-bold text-gray-900 bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <span class="flex-1 ms-3 whitespace-nowrap overflow-hidden">{e}</span>
                </p>
              </div>
            )):<div id="discussion" className='text-3xl text-center text-red-50'>No comments for this lesson Yet</div>
          
          }
          </li>
          <li>
          <form className='mt-2 relative top-5 bottom-0 mb-2' onSubmit={comment}>
                <hr/>
                <div class="relative mt-2">
                    <input type="search" id="search" class="block w-full p-5  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Comment" required value={message} onChange={e=>setMessage(e.target.value)} />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><IoSend className='text-2xl items-center text-white'/></button>
                </div>
            </form>
            </li>
            <p id="success" className='p-2 m-2 text-green-400'></p>
            <marquee className="text-red-500 mt-10">⚠️ comments / discussion only apare on this lesson only</marquee>
        </ul>
      </div>
    </div>
  )
}