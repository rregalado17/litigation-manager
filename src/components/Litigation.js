import React from 'react'
import { useParams } from 'react-router-dom';
import UpdateLitigation from './UpdateLitigation';
import { useDispatch, connect } from 'react-redux'
import { deleteLitigation, litigationDeleted } from '../store/litigations';
import { useState } from 'react';

const Litigation = ( { litigationsArray } ) => {

  const [toggleEdit, setEditMode ] = useState(false);

  let { id } = useParams();
  
  function getLitId(id) {
    return litigationsArray && litigationsArray.length && litigationsArray.find(
      (litigation) => String(litigation.id) === id
    )
  }

  const dispatch = useDispatch();

  let litProfile = getLitId(id);

  const handleDelete = (litProfile) => {
    dispatch(deleteLitigation(litProfile))
  }

  const handleClick = event => {
    setEditMode(current => !current)
  }

  return (
    <div>
      <h2>{litProfile ? litProfile.caption : null}</h2>
      <p>Managing Matter Attorney: {litProfile ? litProfile.lawyer.first_name : null} {litProfile ? litProfile.lawyer.last_name : null}</p>
      <p>Court: {litProfile ? litProfile.court : null}</p>
      <p>Opposing Counsel: {litProfile ? litProfile.opposing_party : null}</p>
      <p>Status: {litProfile ? litProfile.status : null}</p>
      <p>Judge: {litProfile ? litProfile.judge : null}</p>
      <button onClick={() => handleClick(litProfile)}>Edit Profile</button>
      {toggleEdit && (
       <div><UpdateLitigation litigations={litProfile}/><br></br></div>
      )}
      <button onClick={() => handleDelete(litProfile)}>Delete</button>
    </div>
    )
  }

  export default connect(null, {deleteLitigation, litigationDeleted})(Litigation)
