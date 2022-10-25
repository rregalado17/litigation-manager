import React, { Component, useState } from 'react'
import { addLitigation, litigationAdded } from '../store/litigations'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux';
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


class LitigationInput extends Component {

//find a way to use selector to trap all of the lawyer ids

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
    this.props.addLitigation(this.state)
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
        
        <Form onSubmit={this.handleSubmit}>
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
            
            <FormLabel>Managing Attorney:</FormLabel>
            <Form.Select 
                type='select' 
                placeholder='Attorney' 
                value={this.state.lawyer} 
                name="status" 
                onChange={this.handleChange}>
            <option>Active</option>
            <option>Concluded</option>
            </Form.Select>
            
            
            
            <p>Lawyer: <input type='number' 
                placeholder='lawyer' 
                value={this.state.lawyer_id} name="lawyer_id" 
                onChange={this.handleChange}>
            </input></p>
            <FormLabel>Case Status:</FormLabel>
            <Form.Select 
                type='select' 
                placeholder='status' 
                value={this.state.status} 
                name="status" 
                onChange={this.handleChange}>
            <option>Active</option>
            <option>Concluded</option>
            </Form.Select>
            <FormGroup controlId='formBasicDate'>
            <Form.Label>Date of Complaint: </Form.Label>
            <FormControl 
            type="date"
            value={this.state.complaint_date}
            name="complaint_date"
            onChange={this.handleChange}
            />
            </FormGroup>
            <p><Button type='submit'>Add Litigation</Button></p> 
        </Form>
      </div>
    )
  }
}

export default connect(null, {litigationAdded, addLitigation})(LitigationInput)