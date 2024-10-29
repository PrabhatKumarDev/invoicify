import React from 'react'
import './FirstPart.css'
const FirstPart = () => {
  return (
    <>
       <div className='flex bg-primary justify-between mb-3'>
              <div className="flex w-80 bg-primary">
                <div className='flex gap-2 flex-col'>
                  <div className='flex gap-2 items-center'>
                  <span className='font-bold text-small'>Current Date:</span>
                  <span className='text-small'>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className='flex gap-2'>
                  <span className='font-bold text-small flex items-center'>Due Date:</span>
                  <input required type="date" name="" id="" className='form-control text-small ' style={{maxWidth: "15rem"}}/>
                  </div>
                </div>
              </div>
              <div className="flex w-80 bg-primary gap-2">
              <span className='font-bold text-xl text-small invoice flex items-center'>Invoice Number:</span>
              <input className='form-control text-small' type="number" id="quantity" name="quantity" min="1" defaultValue="1"/>
              </div>
            </div>
    </>
  )
}

export default FirstPart
