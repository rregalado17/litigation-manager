import React, { Component, useState } from 'react'

export default class LitigationInput extends Component {
  
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
    this.props.litAdded(this.state)
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
            <p><input type='text' 
                placeholder='Court' 
                value={this.state.caption} name="caption" 
                onChange={this.handleChange}>
            </input></p>
            <p><input type='text' 
                placeholder='Judge' 
                value={this.state.caption} name="caption" 
                onChange={this.handleChange}>
            </input></p>
            <p><input type='Lawyer' 
                placeholder='Caption' 
                value={this.state.caption} name="caption" 
                onChange={this.handleChange}>
            </input></p>
        </form>
      </div>
    )
  }
}
