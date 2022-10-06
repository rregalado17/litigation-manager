import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
 import { updateLitigation, litigationUpdated } from '../store/litigations'

class UpdateLitigation extends Component {

  state = {
    caption: '',
    court: '',
    judge: '',
    lawyer_id: [],
    status: ''
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let litigation = {...this.state, id: this.props.litigation.id}
    this.props.updateLitigation(litigation)
    this.setState({
        caption: '',
        court: '',
        judge: '',
        lawyer_id: [],
        status: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label><h3>Edit Litigation</h3></label>
          <input type='text' placeholder="Caption" value={this.state.caption} name="caption" onChange={this.handleChange}/>
          <input type='text' placeholder='Court' value={this.state.court} name="court" onChange={this.handleChange}/>
          <input type='text' placeholder='Judge' value={this.state.judge} name="judge" onChange={this.handleChange}/>
          <input type='text' placeholder='Lawyer' value={this.state.lawyer_id} name="lawyer_id" onChange={this.handleChange}/>
          <input type='text' placeholder='Status' value={this.state.status} name="status" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }

}
export default connect(null, {litigationUpdated, updateLitigation})(UpdateLitigation)
