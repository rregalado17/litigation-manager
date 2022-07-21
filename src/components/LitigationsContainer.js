import React from 'react'
import Litigation from '../components/Litigation'
import { useSelector } from 'react-redux'

const LitigationsContainer = () => {

const  litigationsArray  = useSelector((store) => store.litigation.litigations)

  return (
    <div>LitigationsContainer
      {litigationsArray && litigationsArray.length && litigationsArray.map((litigation) => {
        return <Litigation key={litigation.id} {...litigation}/> 
      })}
            {/* {console.log(litigationsArray[0])} */}
    </div>
  )
}

export default LitigationsContainer 