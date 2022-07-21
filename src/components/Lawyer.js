import React from 'react'
import { likeLawyer } from '../reducers/lawyerSlice'
import { useDispatch } from 'react-redux'

const Lawyer = ( {id, first_name, last_name, litigations } ) => {
  
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{first_name} {last_name}</h2>
      {litigations.map((lit) => {
        return <li>{lit.caption} </li>
      } ) }
      <button
        onClick={() => dispatch(likeLawyer(id))}>
        Like!
      </button>
    </div>
  )
}

export default Lawyer