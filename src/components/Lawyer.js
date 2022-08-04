import React from 'react'
import { useParams } from 'react-router-dom'
import { likeLawyer } from '../reducers/lawyerSlice'
import { useDispatch } from 'react-redux'

const Lawyer = ({ lawyersArray}) => {
  
  const dispatch = useDispatch();

  let { id } = useParams();
  
  function getLawyerId(id) {
    return lawyersArray && lawyersArray.length && lawyersArray.find(
      (lawyer) => String(lawyer.id) === id
    )
}

  let lawyerProfile = getLawyerId(id);

  return (
    <div>

      <h2>{lawyerProfile ? lawyerProfile.first_name : null} {lawyerProfile ? lawyerProfile.last_name : null}
      </h2>

      <h3>Notable Matters: {lawyersArray && lawyersArray.length && lawyerProfile.litigations.map((litigation) => {
        return <li key={litigation.id}>
          {litigation.caption}
          </li>
      })}</h3>

      <h4>Profile: {lawyerProfile ? lawyerProfile.profile : null}</h4>
      
      <button
        onClick={() => dispatch(likeLawyer(id))}>
        Like!
      </button>

    </div>
  )
}

export default Lawyer