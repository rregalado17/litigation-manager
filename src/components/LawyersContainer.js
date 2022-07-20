import React from 'react'
import Lawyer from '../components/Lawyer'
import { useSelector } from 'react-redux'

const LawyersContainer = () => {

  const { lawyersData } = useSelector((store) => store.lawyer)

  return (
    <div>LawyersContainer
      {lawyersData.map((lawyer) => {
        return <Lawyer key={lawyer.id} {...lawyer} /> 
        })} 
    </div>
  )
}

export default LawyersContainer