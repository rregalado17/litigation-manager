import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UpdateLitigation from './UpdateLitigation';
import { useSelector, useDispatch, connect } from 'react-redux'
import { deleteLitigation, litigationDeleted } from '../store/litigations';

const Litigation = ( { litigationsArray } ) => {

  let { id } = useParams();
  
  function getLitId(id) {
    return litigationsArray && litigationsArray.length && litigationsArray.find(
      (litigation) => String(litigation.id) === id
    )
  }

  const dispatch = useDispatch();

  let litProfile = getLitId(id);

  const handleDelete = (litProfile) => {
    console.log(litProfile)
    console.log(deleteLitigation(litProfile))
    dispatch(deleteLitigation(litProfile))
  }

  return (
    <div>
      <button onClick={() => handleDelete(litProfile)}>Delete</button>
      <h2>{litProfile ? litProfile.caption : null}</h2>
      <p>Managing Matter Attorney: {litProfile ? litProfile.lawyer.first_name : null} {litProfile ? litProfile.lawyer.last_name : null}</p>
      <p>Court: {litProfile ? litProfile.court : null}</p>
      <p>Opposing Counsel: {litProfile ? litProfile.opposing_party : null}</p>
      <p>Status: {litProfile ? litProfile.status : null}</p>
      <p>Judge: {litProfile ? litProfile.judge : null}</p>
      <p><Link to={`/litigations/${id}/edit`}>Edit Litigation</Link></p>
      <UpdateLitigation litigations={litProfile}/>
      {/* <Link to={`/litigations`}>Delete Litigation</Link> */}

    </div>
    )
  }

  export default connect(null, {deleteLitigation, litigationDeleted})(Litigation)
