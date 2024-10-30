import React from 'react'

const BillToFrom = ({bill}) => {
  return (
    <>
      <div className='flex flex-col bill-to-from'>
        <h1 className='text-xl font-bold'>{bill}</h1>
        <p>Name</p>
        <p>Address</p>
        <p>Email</p>
      </div>
    </>
  )
}

export default BillToFrom
