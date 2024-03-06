import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Entry() {
    const [pg, setPg] = useState(0);
    const handel1 = () => {
        setPg(0)
    }
    const handel2 = () => {
        setPg(1)

    }

    return (
        <div style={{minWidth:"300px"}}>
            <div class="w-full text-center text-3xl mt-5 text-fuchsia">
                <div className='flex justify-center'><h1 className='text-fuchsia-400 font-extrabold mb-5 text-4xl font-serif'>Learn Sphere</h1></div>
                <div class="grid max-w-sm grid-cols-2 gap-2 p-2 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600" role="group">
                    <Link to="login" onClick={handel1} class={pg === 0 ? "px-5 p-10 py-1.5 font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg" : "px-5 py-1.5 font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg"}>
                        <p className='text-fuchsia'>login</p>
                    </Link>
                    <Link to="register" onClick={handel2} class={pg === 1 ? "px-5 p-10 py-1.5 font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg" : "px-5 py-1.5 font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg"}>
                    <p className='text-fuchsia'>Register</p>
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
