import React, { Component, useState } from 'react'
import { addLitigation, litigationAdded } from '../store/litigations'
import { connect } from 'react-redux'

class LitigationInput extends Component {
  
  state = {
    caption: '',
    court: '',
    judge: '',
    lawyer: ''
  }

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
        lawyer: ''
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
            <p>Case Caption: <input type='text' 
                placeholder='Court' 
                value={this.state.caption} name="caption" 
                onChange={this.handleChange}>
            </input></p>
            <p>Judge: <input type='text' 
                placeholder='Judge' 
                value={this.state.caption} name="caption" 
                onChange={this.handleChange}>
            </input></p>
            <p>Lawyer: <input type='text' 
                placeholder='Caption' 
                value={this.state.caption} name="caption" 
                onChange={this.handleChange}>
            </input></p>
            <select 
              name='lawyer_id'
              value={this.state.value} onChange={this.handleChange}>
                
              <option value="mango">Mango</option>
            </select>
            <p><input type='submit'></input></p>


        </form>
      </div>
    )
  }
}

export default connect(null, {litigationAdded, addLitigation})(LitigationInput)