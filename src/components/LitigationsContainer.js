import React from 'react'
import Litigation from '../components/Litigation'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const LitigationsContainer = ( {litigationsArray} ) => {

  return (
    <div>
      <h2>Litigation Experience:</h2>
      { litigationsArray && litigationsArray.length && litigationsArray.map((lit) => {
        return <div key={lit.id}>
          <Link
            className='litigationBttn'
            to={`/litigations/${lit.id}`}
          >
          {lit.caption}
      </Link>
      </div>
      })}
      {/* <Link 
        className='litigationBttn'
         to={`/litigations/${litigation.id}`}
      >
      {litigationsArray && litigationsArray.length && litigationsArray.map((litigation) => {
        return <Litigation key={litigation.id} {...litigation}/> 
      })} 
      </Link> */}
    </div>
  )
}

export default LitigationsContainer 