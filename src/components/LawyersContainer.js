import React from 'react'
import Lawyer from '../components/Lawyer'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';import { Link } from 'react-router-dom'


const LawyersContainer = () => {

  const lawyersArray = useSelector((store) => store.lawyer.lawyers)
 
  return (
    <div>
      <Routes>

      </Routes>
      <h2>Browse the profiles of lawyers in our system:</h2>
      {/* {lawyersArray && lawyersArray.length && lawyersArray.map((lawyer) => {
          return <Lawyer key={lawyer.id} {...lawyer} /> 
        })} */}
        {lawyersArray && lawyersArray.length && lawyersArray.map((lawyer) => {
          return <div key={lawyer.id}>
            <Link 
            className='lawyerBtn'
            to={`/lawyers/${lawyer.id}`}
            >
            <Lawyer {...lawyer} />
            </Link>

            </div> 
        })}
    </div>
  )
}

export default LawyersContainer