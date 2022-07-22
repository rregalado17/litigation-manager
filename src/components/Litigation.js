import React from 'react'

const Litigation = ( {id, caption, judge, court, lawyer  } ) => {

  // const lawyersArray = Object.keys(lawyer)
  //   .filter((key) => key.includes('lawyers'))
  //   .reduce((cur, key) => 
  //   {return Object.assign(cur, {[key]: lawyer[key] })}, {} 
  // )

  // console.log(lawyer)

  return (
    <div>
      <h2>{caption}</h2>
      <h3>Court: {court}</h3>
    
       {Object.keys(lawyer).map(function(key, index) {
         return <p>{lawyer.first_name} {lawyer.last_name}</p>
       } )}

      {/* {lawyersArray && lawyersArray.length && lawyersArray.map((lit) => {
        return <li>{lit.first_name} </li>
      })} */}


    </div>
      
    )
  }

  export default Litigation;

  // Object.keys(obj).
  // filter((key) => key.includes('first_Name')).
  // reduce((cur, key) => { return Object.assign(cur, { [key]: obj[key] })}, {});
