import React from 'react'
import { useParams } from 'react-router-dom'
// import { likeLawyer } from '../reducers/lawyerSlice'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import LawyersContainer from './LawyersContainer'

const Lawyer = ( {id, first_name, last_name, litigations, lawyersArray} ) => {
  
  // const dispatch = useDispatch();

  // const lawyersArray = useSelector((store) => store.lawyer.lawyers)
  // const lawyerId = lawyersArray.filter(lawyer => lawyer.id === id)
  

  let params = useParams();
  
  function getLawyerId() {
    lawyersArray.find(
      (lawyer) => lawyer.id === params.id
    )
  }

  let lawyer = getLawyerId(parseInt(params.id));

  return (
    <div>

    {console.log(lawyer)}

      {/* <h2>{console.log(id)}</h2> */}
      {/* {litigations.map((lit) => {
        return <li>{console.log(lit.caption)} </li>
      })}
      
      <button
        onClick={() => dispatch(likeLawyer(id))}>
        Like!
      </button> */}
      <h4>hi</h4>
    </div>
  )
}

export default Lawyer