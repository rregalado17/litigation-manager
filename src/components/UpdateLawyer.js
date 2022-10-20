import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { updateLawyer, lawyerUpdated } from '../store/lawyers'

class UpdateLawyer extends Component {

  state = {
    first_name: this.props.lawyers.first_name,
    last_name: this.props.lawyers.last_name,
    profile: this.props.lawyers.profile,
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let lawyer = {
      ...this.state, 
      id: this.props.lawyers.id
    }
    console.log(updateLawyer(lawyer))
    this.props.updateLawyer(lawyer)
    this.setState({
        first_name: '',
        last_name: '',
        profile: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label><h3>Edit Litigation</h3></label>
          First Name: <input type='text' placeholder="First Name" value={this.state.first_name} name="first_name" onChange={this.handleChange}/><br></br>
          Last Name: <input type='text' placeholder='Last Name' value={this.state.last_name} name="last_name" onChange={this.handleChange}/><br></br>
          Profile: <input type='text' placeholder='Profile' value={this.state.profile} name="profile" onChange={this.handleChange}/><br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
export default connect(null, {lawyerUpdated, updateLawyer})(UpdateLawyer)