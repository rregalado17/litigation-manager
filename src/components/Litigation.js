import React from 'react'

const Litigation = ( {id, caption, judge, court, lawyer  } ) => {

  return (
    <div>
      <h2>{caption}</h2>
      <h3>Court: {court}</h3>
       {/* {Object.keys(lawyer).map(function(key, index) {
         return <p>{lawyer.first_name} {lawyer.last_name}</p>
       })} */}
       {console.log(court)}

    </div>
    )
  }

  export default Litigation;