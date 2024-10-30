import React from 'react'
import Buttons from './Buttons'
const EndPart = () => {
  return (
    <div className='flex button-container gap-4'>
      <Buttons icon={<i class="fa-solid fa-paper-plane"></i>} title="Send Invoice" buttonClass="button1" />
      <Buttons icon={<i class="fa-solid fa-cloud-arrow-down"></i>} title="Download PDF" buttonClass="button2" />
    </div>
  )
}

export default EndPart
