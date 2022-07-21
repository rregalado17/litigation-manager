import React from 'react'
import Lawyer from '../components/Lawyer'
import { useSelector } from 'react-redux'

const LawyersContainer = () => {

  // const { lawyersData } = useSelector((store) => store.lawyer)
  const lawyersArray = useSelector((store) => store.lawyer)
 
  return (
    
    <div>LawyersContainer
      {/* {console.log(lawyersArray.lawyers[0].first_name)} */}
      {/* {lawyersData.map((lawyer) => {
        return <Lawyer key={lawyer.id} {...lawyer} /> 
        })}  */}
        {lawyersArray && lawyersArray.length && lawyersArray.lawyers.map((lawyer) => {
          return <Lawyer key={lawyer.id} {...lawyer} />
        })}
    </div>
    
  )
}

export default LawyersContainer