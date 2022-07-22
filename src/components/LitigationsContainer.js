import React from 'react'
import Litigation from '../components/Litigation'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

const LitigationsContainer = () => {

const  litigationsArray  = useSelector((store) => store.litigation.litigations)

  return (
    <div>
      <Routes>
        {/* <Route path='/lawyers/new' component={LawyerInput}/> */}
        {/* <Route path='/litigations/:id' render= {(routerProps) => <Litigation {...routerProps} litigations={this.props.litigations}/>}/> */}
        <Route exact path='/litigations'/>
        {/* <Route exact path='litigations/lawyers' render={() => <Lawyers lawyers={this.props.litigations.lawyers}/>}/> */}
    
      </Routes>
      {litigationsArray && litigationsArray.length && litigationsArray.map((litigation) => {
        return <Litigation key={litigation.id} {...litigation}/> 
      })}
    </div>
  )
}

export default LitigationsContainer 