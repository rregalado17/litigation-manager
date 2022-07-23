import React from 'react'
import { likeLawyer } from '../reducers/lawyerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Lawyer = ( {id, first_name, last_name, litigations } ) => {
  
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{console.log(first_name)} {last_name}</h2>
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