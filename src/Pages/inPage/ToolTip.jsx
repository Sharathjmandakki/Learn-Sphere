import React from 'react'

export default function ToolTip() {
  return (
    <div>
        {showTooltip && <div className="absolute -translate-x-2/4 bg-slate-800 text-sky-100 p-1 rounded-s inline-block whitespace-nowrap" style={{top:'100%',left:"100%"}}>Go back to {props.title}</div>}
    </div>
  )
}
