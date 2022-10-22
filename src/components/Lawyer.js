import React, { useState } from 'react'
import { useHref, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import UpdateLawyer from './UpdateLawyer';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <br></br><h2>{lawyerProfile ? lawyerProfile.first_name : null} {lawyerProfile ? lawyerProfile.last_name : null}</h2>
      <Container>
      <Row>
      <Col><strong>Position: {lawyerProfile.position}</strong></Col>
      </Row> 
      <Row>
      <Col><strong>Practice: </strong>{lawyerProfile.practice}</Col>
      <Col><strong>Law School: </strong>{lawyerProfile.law_school}</Col>
      </Row> 
      <Row> 
      <Col><strong>Email:</strong> {lawyerProfile.email}</Col>
      <Col><strong>Contact Number:</strong> {lawyerProfile.phone}</Col>
      </Row> 
      </Container>
      <br></br>
      <h4>Notable Matters: </h4>{lawyersArray && lawyersArray.length && lawyerProfile.litigations.map((litigation) => {
        return <li key={litigation.id}><Link to={`/litigations/${litigation.id}`}> <Container> 
                {litigation.caption}</Container> </Link>
              </li>
            })}<br></br>
         
      <p>Profile: {lawyerProfile ? lawyerProfile.profile : null}</p>
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