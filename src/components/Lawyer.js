import React from 'react'
import { useParams } from 'react-router-dom'
// import { likeLawyer } from '../reducers/lawyerSlice'
// import { useDispatch, useSelector } from 'react-redux'

const Lawyer = ({ lawyersArray}) => {
  
  // const dispatch = useDispatch();

  // const lawyersArray = useSelector((store) => store.lawyer.lawyers)
  // const lawyerId = lawyersArray.filter(lawyer => lawyer.id === id)
  

  let { id } = useParams();
  
  function getLawyerId(id) {
    return lawyersArray && lawyersArray.length && lawyersArray.find(
      (lawyer) => String(lawyer.id) === id
    )
}

  let lawyerProfile = getLawyerId(id);

  return (
    <div>

      <h2>{lawyerProfile ? lawyerProfile.first_name : null} {lawyerProfile ? lawyerProfile.last_name : null}</h2>

      <h3>{lawyersArray && lawyersArray.length && lawyerProfile.litigations.map((litigation) => {
        return <li key={litigation.id}>
          {litigation.caption}
          </li>
      })}</h3>

    {/* {console.log(lawyerProfile.litigations[0].caption)} */}

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