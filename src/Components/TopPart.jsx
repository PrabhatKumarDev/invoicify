import React from 'react'

const TopPart = () => {
  return (
    <>
      <div className='top-part flex justify-between'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold invoice-from'>Name</h1>
                    <h3 className='invoice-number'>Invoice</h3>
                </div>
                <div className='flex flex-col items-end'>
                    <h2 className='amount-due'>Amount Due:</h2>
                    <h3 className='amount-due-value'>$6</h3>
                </div>
            </div>
    </>
  )
}

export default TopPart
