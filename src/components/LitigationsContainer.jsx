import React from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

const LitigationsContainer = ( {litigationsArray} ) => {

  return (
    <div>
      <h2>Litigation Experience:</h2>
        { litigationsArray && litigationsArray.length && litigationsArray.map((lit) => {
          return <div key={lit.id}>
            <ListGroup>
              <ListGroup.Item>
                <Link to={`/litigations/${lit.id}`}>{lit.caption}</Link>
              </ListGroup.Item>
            </ListGroup>
          </div>
      })}
    </div>
  )
}

export default LitigationsContainer 

