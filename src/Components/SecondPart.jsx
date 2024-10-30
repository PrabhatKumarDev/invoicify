import React from 'react'
import BillToFrom from './BillToFrom'
const SecondPart = () => {
  return (
    <div className='second-part flex'>
      <BillToFrom bill={"Billed To"}/>
      <BillToFrom bill={"Billed From"}/>
      <div className='flex flex-col'>
        <h1 className='text-xl font-bold'>Date of Issue</h1>
        <p>2024-01-01</p>
      </div>
    </div>
  )
}

export default SecondPart
