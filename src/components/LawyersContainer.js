import React from 'react'
// import Lawyer from '../components/Lawyer'
// import { LawyerInput } from './LawyerInput';
// import { useSelector } from 'react-redux'
// import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

const LawyersContainer = ({lawyersArray}) => {

  // const lawyersArray = useSelector((store) => store.lawyer.lawyers)

  return (
    <div>
      {/* <Routes> */}
        {/* <Route path='/lawyers/new' component={LawyerInput} /> */}
        {/* <Route path="/lawyers/:id" component={<Lawyer lawyersArray={lawyersArray}/>} /> */}
      {/* </Routes> */}
      <h2>Browse the profiles of lawyers in our system:</h2>
        { lawyersArray && lawyersArray.length && lawyersArray.map((lawyer) => {
          return <div key={lawyer.id}>
            <Link 
            className='lawyerBtn'
            to={`/lawyers/${lawyer.id}`}
            >
            {lawyer.first_name} {lawyer.last_name}
            </Link>

            </div>
        })}

    </div>
  )
  
}


export default LawyersContainer