import React, { useState } from 'react'
import './Fourth.css'
const Fourth = ({total,tax,discount,currency}) => {
  const aftertax=(total*tax/100);
  const afterdiscount=(total*discount/100);
  const subtotal=total-afterdiscount +aftertax;
  return (
    <div className='mt-10 flex justify-end '>
      <div className='flex w-1/2  flex-col'>
      <div className='flex justify-between w-full'>
        <span className='font-bold text-small'>Subtotal:</span>
        <span className='text-small'>{`${currency} ${total.toFixed(2)}`}</span>
      </div>
      <div className='flex justify-between w-full mt-3'>
        <span className='font-bold text-small'>Discount:</span>
        <span className='text-small'>{`(${discount}%)${currency} ${afterdiscount.toFixed(2)}`}</span>
      </div>
      <div className='flex justify-between w-full mt-3'>
        <span className='font-bold text-small'>Tax:</span>
        <span className='text-small'>{`(${tax}%)${currency} ${aftertax.toFixed(2)}`}</span>
      </div>
      <hr className='w-full hr' />
      <div className='flex justify-between w-full mt-3 total'>
        <span className='font-bold text-small '>Total</span>
        <span className='text-small'>{`${currency} ${subtotal.toFixed(2)}`}</span>
      </div>
      </div>
    </div>
  )
}

export default Fourth
