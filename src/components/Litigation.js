import React from 'react'

const Litigation = ( {id, caption, judge, court, lawyer  } ) => {
    return (
      <div>
        <h2>{caption}</h2>
        <h3>Court: {court}</h3>
         {lawyer.map((law) => {
            return <p>{law.first_name} {law.last_name}</p>
        } ) }
      </div>
      
    )
  }

  export default Litigation;


