import React from 'react'
import Lawyer from '../components/Lawyer'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

const LawyersContainer = () => {

  const lawyersArray = useSelector((store) => store.lawyer.lawyers)
 
  return (
    <div>
      <Routes>

      </Routes>
      {lawyersArray && lawyersArray.length && lawyersArray.map((lawyer) => {
          return <Lawyer key={lawyer.id} {...lawyer} /> 
        })}
    </div>
  )
}

export default LawyersContainer