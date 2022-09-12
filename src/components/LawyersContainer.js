import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LawyersContainer extends Component {
  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}

// const LawyersContainer = ( {lawyersArray} ) => {

//   return (
//     <div>
//       <h2>Browse the profiles of lawyers in our system:</h2>
//         { lawyersArray && lawyersArray.length && lawyersArray.map((lawyer) => {
//           return <div key={lawyer.id}>
//               <Link 
//                 className='lawyerBtn'
//                 to={`/lawyers/${lawyer.id}`}
//               >
//                 {lawyer.first_name} {lawyer.last_name}
//               </Link>
//             </div>
//           }
//         )
//       }
//   </div>
//   )
// }

export default LawyersContainer