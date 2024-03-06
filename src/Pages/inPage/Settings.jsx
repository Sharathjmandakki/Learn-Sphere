import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Settings() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const navigate=useNavigate()
    const logOut=async()=>{
        closeDropdown();
        try{
            await axios.get("http://localhost:8080/logout")
            navigate("/entry",{ replace: true })           
        }catch(e){
            navigate("/entry",{ replace: true })
            alert("error in logout")
        }

    }
    return (
        <li>
            <Link class= "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={toggleDropdown}>⚙️ Settings</Link>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <li>
                            <a href="/aboutme" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                                About Me
                            </a>
                        </li>
                        <li>
                            <a href="/entry/update" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>
                                Update Password
                            </a>
                        </li>
                        <li>
                            <a className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={logOut}>
                                Log out
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </li>
    )
}

