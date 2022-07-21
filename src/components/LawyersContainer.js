import React from 'react'
import Lawyer from '../components/Lawyer'
import { useSelector } from 'react-redux'

const LawyersContainer = () => {

  const lawyersArray = useSelector((store) => store.lawyer.lawyers)
 
  return (
    
    <div>LawyersContainer
        {lawyersArray && lawyersArray.length && lawyersArray.map((lawyer) => {
          return <Lawyer key={lawyer.id} {...lawyer} /> 
        })}
      {/* {console.log(lawyersArray[0])} */}
    </div>
    
  )
}

export default LawyersContainer