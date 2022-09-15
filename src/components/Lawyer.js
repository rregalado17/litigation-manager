import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
// import { likeLawyer } from '../reducers/lawyerSlice'

const Lawyer = ({ lawyersArray}) => {
  
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
      <h3>Notable Matters: {lawyersArray && lawyersArray.length && lawyerProfile.litigations.map((litigation) => {
    
      return <li key={litigation.id}><Link to={`/litigations/${litigation.id}`}>
              {litigation.caption}</Link>
            </li>
          })}</h3>
      
      <h4>Profile: {lawyerProfile ? lawyerProfile.profile : null}</h4>

    <button onClick={'/litigations/new'}>
      Add Litigation
    </button>
    {/*      
      <button
        onClick={() => dispatch(likeLawyer(id))}>
        Like!
      </button> */}
    </div>
  )
}

export default Lawyer