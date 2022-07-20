import React from 'react'
import Litigation from '../components/Litigation'
import { useSelector } from 'react-redux'

const LitigationsContainer = () => {

  const { litData } = useSelector((store) => store.litigation)

  return (
    <div>LitigationsContainer
      {litData.map((lit) => {
        return <Litigation key={lit.id} {...lit} /> 
        })}

    </div>
  )
}

export default LitigationsContainer 