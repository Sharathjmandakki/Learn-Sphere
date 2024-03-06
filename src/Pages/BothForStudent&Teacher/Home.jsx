import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Search from './Search';
import payment from '../../Payment';
export default function Home() {
    const url = "https://img.freepik.com/free-photo/beautiful-mountain-landscape_23-2149063332.jpg";
    const [course, setCourse] = useState([]);
    const [paid,setPaid]=useState(false);
    const[signature ,setSignature]=useState('');
    const[paymentId ,setPaumentId]=useState('');
    const[orderId ,setOrderId]=useState('');
    const navigate=useNavigate();
    useEffect(() => {
        const getAllCourses = async () => {
            try {
                const response = await axios.get("http://localhost:8080/viewAll");
                setCourse(response.data)
                if(response.data.length===0){
                    document.getElementById("box").innerHTML="<div class='min-h-96 m-24 text-4xl text-slate-400'>No course avilable plese refresh 🔃</div>"
                }
            } catch (e) {
                navigate("/entry",{ fileToDelete: true })
                document.getElementById("box").innerHTML="<div class='min-h-96 m-24 text-4xl text-slate-400'>404 Error</div>"
            }
        }
        const loginuser=async()=>{
            try{
                const res=await axios.get("http://localhost:8080/loginuser")
                if(res!=null&&res.data!=null){
                    // setUser(res.data)
                }else{
                    navigate("/entry",{ replace: true })
                }
                
            }catch(e){
                navigate("/entry",{ replace: true })
            }
           }
        loginuser()
        getAllCourses()
        
    }, []);
    const handleClick=(courseData)=>{
        if(courseData.pay===true){
            navigate('/viewCourse', { state: {data:courseData} });
        }else{
            navigate('viewcourses', { state: {data:courseData} });
        }
    }

    // const payment=async(c)=>{
    //     try{
    //         const response=await axios.post("http://localhost:8080/createOrder",{
    //                 name:c.name,
    //         })
    //         if(response==="yes"){
    //             console.log("you already paid")
    //         }
    //         const u=await axios.get("http://localhost:8080/loginuser")
    //         Payment(c,u,response.data.id)
    //     }catch(e){
    //         alert(e)
    //         // window.location.href="/entry"
    //     }
    // }

    return (
        <div className='m-2 p-2'>
        <Search/>
        <Outlet/>
        <hr/>
        <div className='p-2 flex-wrap flex justify-center' >
            <div id='box'></div>
            {
                course.map((courses) => (
                    
                    <div class="m-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <button onClick={()=>handleClick(courses)}>
                            <img class="p-8 rounded-t-lg" src={courses.url != null ? courses.url : url} alt="product image" />
                        </button>
                        <div class="px-5 pb-5">
                            <h5 class="text-2xl mb-3 font-semibold tracking-tight text-gray-900 dark:text-white">{courses.name}</h5>
                            <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white"> ₹{courses.price} /-</span>
                            <span class="text-xl pt-3 font-bold text-gray-900 dark:text-white"> {courses.uploadby}</span>
                            </div>
                        </div>
                    </div>

                ))
            }
            </div>
        </div>
    );
}