import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';


const LawyersContainer = ( {lawyersArray} ) => {

  return(
    <div>
      <h2>Browse the profiles of lawyers in our system:</h2>
      <CardGroup>
      {lawyersArray && lawyersArray.length && lawyersArray.map((lawyer) => {
        return <div key={lawyer.id}>
          <Card style={{ width: '18rem' }}> 
          <Card.Body>
          <Card.Title>{lawyer.first_name} {lawyer.last_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{lawyer.position}</Card.Subtitle>
          <Card.Text>{lawyer.profile}</Card.Text>
          <Button variant="light"><Link to={`/lawyers/${lawyer.id}`}>Full Profile</Link></Button>
          </Card.Body>
          </Card>
        </div>
      })}
      </CardGroup>
    </div>
  )
}

export default LawyersContainer
