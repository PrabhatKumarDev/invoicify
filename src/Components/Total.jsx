import React from 'react'

const Total = ({title,amount}) => {
  return (
    <>
       <tr className="h-14">
            <td></td>
            <td></td>
            <td className=' w-40 tex-2xl font-bold'>{title}</td>
            <td className='text-end w-40'>${amount}</td>
          </tr>
    </>
  )
}

export default Total
