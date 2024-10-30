import React from 'react'
import TopPart from './TopPart'
import SecondPart from './SecondPart'
import ReviewTable from './ReviewTable'
import EndPart from './EndPart'
const Review = ({handleClose}) => {
  return (
    <div className='modal-container w-screen h-screen flex justify-center items-center' onClick={handleClose}>
        <div className='modal-content'>
            <TopPart />
            <SecondPart />
            <ReviewTable/>
            <EndPart />
        </div>
    </div>
  )
}

export default Review
