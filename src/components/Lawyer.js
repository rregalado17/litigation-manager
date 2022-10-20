import React, { useState } from 'react'
import { useHref, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import UpdateLawyer from './UpdateLawyer';
// import { likeLawyer } from '../reducers/lawyerSlice'

const Lawyer = ({ lawyersArray}) => {
  
  const [toggleEdit, setEditMode ] = useState(false) 
  
  const url = "http://localhost:3001/litigations/new"

  let { id } = useParams();
  function getLawyerId(id) {
    return lawyersArray && lawyersArray.length && lawyersArray.find(
      (lawyer) => String(lawyer.id) === id
    )
  }
  let lawyerProfile = getLawyerId(id);

  const handleClick = event => {
    setEditMode(current => !current )
  }

  return (
    <div>
      <h2>{lawyerProfile ? lawyerProfile.first_name : null} {lawyerProfile ? lawyerProfile.last_name : null}</h2>
      <h3>Notable Matters: {lawyersArray && lawyersArray.length && lawyerProfile.litigations.map((litigation) => {
      return <li key={litigation.id}><Link to={`/litigations/${litigation.id}`}>
              {litigation.caption}</Link>
            </li>
          })}</h3>
      
      <h4>Profile: {lawyerProfile ? lawyerProfile.profile : null}</h4>
    <Link to={`/litigations/new`}>
    <button onClick={useHref(url)}>
      Add Litigation
    </button><br></br>
    </Link>

    <button onClick={() =>handleClick(lawyerProfile)}>Edit Lawyer Profile</button>
        {toggleEdit && (
          <div><UpdateLawyer lawyers={lawyerProfile}/><br></br></div>
        )}
      {/* <button
        onClick={() => dispatch(likeLawyer(id))}>
        Like!
      </button> */}
    </div>
  )
}

export default Lawyer