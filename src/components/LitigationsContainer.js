import React from 'react'
import Litigation from '../components/Litigation'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const litLink = {
  width: '100%',
  height: '100%',
  padding: '1rem',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: '#f7f6f2',
}

const LitigationsContainer = ( {litigationsArray} ) => {

  return (
    <div>
      <h2>Litigation Experience:</h2>
        { litigationsArray && litigationsArray.length && litigationsArray.map((lit) => {
          return <div key={lit.id}>
            <Link
              className='litLink'
              to={`/litigations/${lit.id}`}
              exact style={litLink}
              activeStyle={{background: '#4b616c'}}
            >
              {lit.caption}
            </Link>
          </div>
        }
      )
    }
  </div>
  )
}

export default LitigationsContainer 