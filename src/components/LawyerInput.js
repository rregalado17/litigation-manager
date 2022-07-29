import React from 'react'
import { connect } from 'react-redux'

export const LawyerInput = () => {

  
  
  handleSubmit = (event) => {
    this.console.log(event)
  }

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <laber>Submit Your New Lawyer Form</laber>
        <input type='text' placeholder='First Name' value={this.state.first_name} />
        <input type='text' placeholder='Last Name' value={this.state.last_name} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default LawyerInput