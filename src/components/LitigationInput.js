import React, { Component, useState } from 'react'
import { addLitigation, litigationAdded } from '../store/litigations'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux';

class LitigationInput extends Component {

  state = {
    caption: '',
    court: '',
    judge: "",
    lawyer_id: [],
  }

  // lawyersArray = this.lawyersArray


  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addLitigation(this.state)
    this.setState({
        caption: '',
        court: '',
        judge: '',
        lawyer_id: [],
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label><h3>New Litgation Form</h3></label>
            <p>Caption:  <input type='text' 
                placeholder='Caption' 
                value={this.state.caption} name="caption" 
                onChange={this.handleChange}>
            </input></p>
            <p>Court: <input type='text' 
                placeholder='Court' 
                value={this.state.court} name="court" 
                onChange={this.handleChange}>
            </input></p>
            <p>Judge: <input type='text' 
                placeholder='Judge' 
                value={this.state.judge} name="judge" 
                onChange={this.handleChange}>
            </input></p>
            <p>Lawyer: <input type='number' 
                placeholder='lawyer' 
                value={this.state.lawyer_id} name="lawyer_id" 
                onChange={this.handleChange}>
            </input></p>
            {/* <select value={this.state.value} onChange={this.handleChange}>
              <option key={lawyer_id} value={first_name}>{first_name} {last_name}</option>
            </select> */}
            {/* {console.log(this.lawyersArray)} */}
            <p><input type='submit'></input></p> 


        </form>
      </div>
    )
  }
}

export default connect(null, {litigationAdded, addLitigation})(LitigationInput)