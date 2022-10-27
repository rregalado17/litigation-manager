import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { updateLitigation, litigationUpdated } from '../store/litigations'
import Form from 'react-bootstrap/Form';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

class UpdateLitigation extends Component {

  state = {
    caption: this.props.litigations.caption,
    court: this.props.litigations.court,
    judge: this.props.litigations.judge,
    lawyer_id: this.props.litigations.lawyer.id,
    status: this.props.litigations.status,
    complaint_date: this.props.litigations.complaint_date,
    legal_areas: this.props.litigations.legal_areas,
    governing_law: this.props.litigations.governing_law,
    industry: this.props.litigations.industry,
    claims: this.props.litigations.claims,
    counterclaims: this.props.litigations.counterclaims,
    lawyerId: this.props.lawyerId
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    let litigation = {
      ...this.state, 
      id: this.props.litigations.id
    }
    this.props.updateLitigation(litigation)
    this.setState({
        caption: '',
        court: '',
        judge: '',
        lawyer_id: [],
        status: '',
        complaint_date: '',
        legal_areas: '',
        governing_law: '',
        industry: '',
        claims: '',
        counterclaims: ''
    })
  }

  render() {
    return (
      
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label><h3>Edit Litigation</h3></label>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Caption: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Caption"
            value={this.state.caption}
            name="caption"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Court: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Court"
            value={this.state.court}
            name="court"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Judge: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Judge"
            value={this.state.judge}
            name="judge"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Lawyer: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Lawyer"
            value={this.state.lawyer_id}
            name="lawyer_id"
            onChange={this.handleChange}
            />
          </FormGroup>









          {/* <FormGroup controlId='formBasicText'>
          <Form.Label>Lawyer: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Lawyer"
            value={this.state.lawyerId}
            name="lawyerId"
            onChange={this.handleChange}
            />
          </FormGroup>
 */}











          
          <Form.Label>Case Status:</Form.Label>
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
            placeholder="Date of Complaint"
            value={this.state.complaint_date}
            name="complaint_date"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Areas of Law: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Areas of Law"
            value={this.state.legal_areas}
            name="legal_areas"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Governing Law: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Governing Law"
            value={this.state.governing_law}
            name="governing_law"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Industry: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Industry"
            value={this.state.industry}
            name="industry"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Claims: </Form.Label>
          <FormControl 
            type="number"
            value={this.state.claims}
            name="claims"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Counterclaims: </Form.Label>
          <FormControl 
            type="number"
            value={this.state.counterclaims}
            name="counterclaims"
            onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit">Update</Button>
        </Form>
      </div>
    )
  }
}
export default connect(null, {litigationUpdated, updateLitigation})(UpdateLitigation)
