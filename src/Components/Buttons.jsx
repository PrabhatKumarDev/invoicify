import React from 'react'

const Buttons = ({icon,title,buttonClass}) => {
  return (
    <div className='w-1/2'>
      <button className={`btn w-full download-btn flex justify-center items-center gap-6 ${buttonClass}`} >
      {icon}
      <h2>{title}</h2>
      </button>
    </div>
  )
}

export default Buttons
