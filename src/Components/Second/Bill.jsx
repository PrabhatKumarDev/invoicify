import React from 'react'
import './Bill.css'
const Bill = ({bill,who}) => {
  return (
    <div className='flex flex-col w-1/2'>
      <h1 className='text-small font-bold'>{bill}:</h1>
      <input required className='bill' type="text" name="" id="" placeholder={who}/>
      <input required className='bill' type="email" name="" id="" placeholder='Email address' />
      <input required className='bill' type="text" name="" id=""  placeholder='Billing address' />
    </div>
  )
}

export default Bill
