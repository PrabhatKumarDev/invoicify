import React from 'react'

const Review = () => {
  return (
    <div className='modal-container w-screen h-screen flex justify-center items-center'>
        <div className='modal-content'>
            <div className='top-part flex justify-between'>
                <div className='flex flex-col'>
                    <h1>Name</h1>
                    <h3>Invoice</h3>
                </div>
                <div className='flex flex-col'>
                    <h2>Amount Due:</h2>
                    <h3>$6</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review
