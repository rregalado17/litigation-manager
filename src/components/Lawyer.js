import React from 'react'

const Lawyer = ( {id, first_name, last_name, litigations } ) => {
  return (
    <div>
      <h2>{first_name}, {last_name}</h2>
      {litigations.map((lit) => {
        return <li>{lit.caption} </li>
      } ) }
    </div>
  )
}

export default Lawyer