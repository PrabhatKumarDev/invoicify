import React from 'react'
import Bill from './Bill'
const Second = () => {
  return (
    <div className='flex w-full justify-between gap-6 mb-20'>
      <Bill bill={"Bill to"} who={"Who is this invoice to?"}/>
      <Bill bill={"Bill from"} who={"Who is this invoice from?"}/>
    </div>
  )
}

export default Second
