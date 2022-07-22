import React from 'react'
import { likeLawyer } from '../reducers/lawyerSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Lawyer = ( {id, first_name, last_name, litigations } ) => {
  
  const dispatch = useDispatch();

  return (
    <div>
      {/* <h2>{first_name} {last_name}</h2>
      {litigations.map((lit) => {
        return <li>{lit.caption} </li>
      })}
      <button
        onClick={() => dispatch(likeLawyer(id))}>
        Like!
      </button> */}
      <h2>Browse the profiles of lawyers in our system:</h2>
      <h4></h4>
    </div>
  )
}

export default Lawyer