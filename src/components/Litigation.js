import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Litigation = ( { litigationsArray } ) => {

  const url = "http://localhost:3001/litigations/edit"

  let { id } = useParams();
  
  function getLitId(id) {
    return litigationsArray && litigationsArray.length && litigationsArray.find(
      (litigation) => String(litigation.id) === id
    )
  }

  let litProfile = getLitId(id);

  return (
    <div>
      <h2>{litProfile ? litProfile.caption : null}</h2>
      <p>Managing Matter Attorney: {litProfile ? litProfile.lawyer.first_name : null} {litProfile ? litProfile.lawyer.last_name : null}</p>
      <p>Court: {litProfile ? litProfile.court : null}</p>
      <p>Opposing Counsel: {litProfile ? litProfile.opposing_party : null}</p>
      <p>Status: {litProfile ? litProfile.status : null}</p>
      <p><Link to={`/litigations/edit`}>Edit Litigation</Link></p>
      <Link to={`/litigations`}>Delete Litigation</Link>
    </div>
    )
  }

  export default Litigation;