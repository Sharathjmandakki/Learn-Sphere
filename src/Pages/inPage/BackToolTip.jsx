import React, { useState } from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function BackToolTip(props) {
const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1);
    };
  return (
    <div className='relative inline-block'>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
        className='mb-2 text-4xl items-center p-1 font-bold text-gray-900 rounded-full hover:bg-gray-100 group hover:shadow dark:hover:bg-gray-500 dark:text-white' onClick={handleGoBack}>
            <MdOutlineArrowBackIos/>
        </button>
        {showTooltip && <div className="absolute -translate-x-1/4 -translate-y-28 bg-slate-800 text-sky-100 p-1 rounded-s inline-block whitespace-nowrap" style={{top:'100%',left:"100%"}}>Go back to {props.title}</div>}
     </div>
  )
}
