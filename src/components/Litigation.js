import React from 'react'
import { useParams } from 'react-router-dom';
import UpdateLitigation from './UpdateLitigation';
import { useDispatch, connect, useSelector } from 'react-redux'
import { deleteLitigation, litigationDeleted } from '../store/litigations';
import { useState } from 'react';
import EditLitigation from './EditLitigation';
import { Button } from 'react-bootstrap';


const Litigation = ( { litigationsArray } ) => {

  const [toggleEdit, setEditMode ] = useState(false);

  let { id } = useParams();
  
  const lawyersId = useSelector((store) => store.lawyers.list)

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
      <p>Date of Complaint: {litProfile ? litProfile.complaint_date: null}</p>
      <p>Areas of Law: {litProfile ? litProfile.legal_areas : null}</p>
      <p>Governing Law: {litProfile ? litProfile.governing_law : null}</p>
      <p>Industry: {litProfile ? litProfile.industry : null}</p>
      <p>Claims: {litProfile ? litProfile.claims : null}</p>
      <p>Counterclaims: {litProfile ? litProfile.counterclaims : null}</p>
      <Button onClick={() => handleClick(litProfile)}>Edit Profile</Button><p></p>
      {toggleEdit && (
      //  <div><UpdateLitigation litigations={litProfile}/><br></br></div>
       <div><EditLitigation lawyers={lawyersId} litProfile={litProfile}/><br></br></div>
      )}
      <Button onClick={() => handleDelete(litProfile)}>Delete</Button>
    </div>
    )
  }

  export default connect(null, {deleteLitigation, litigationDeleted})(Litigation)
