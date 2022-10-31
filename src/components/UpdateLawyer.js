import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { updateLawyer, lawyerUpdated } from '../store/lawyers'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl, FormGroup } from 'react-bootstrap';


class UpdateLawyer extends Component {

  state = {
    first_name: this.props.lawyers.first_name,
    last_name: this.props.lawyers.last_name,
    profile: this.props.lawyers.profile,
    position: this.props.lawyers.position,
    law_school: this.props.lawyers.law_school,
    practice: this.props.lawyers.practice,
    email: this.props.lawyers.email,
    phone: this.props.lawyers.phone
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
        profile: '',
        practice: '',
        position: '',
        law_school: '',
        practice: '',
        email: '',
        phone: null,
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label><h3>Edit Litigation</h3></label><br></br>
          <FormGroup controlId='formBasicText'>
          <Form.Label>First Name: </Form.Label>
          <FormControl 
            type="text"
            placeholder="First Name"
            value={this.state.first_name}
            name="first_name"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Last Name: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Last Name"
            value={this.state.last_name}
            name="last_name"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Position: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Position"
            value={this.state.position}
            name="position"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Law School: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Law School"
            value={this.state.law_school}
            name="law_school"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Email: </Form.Label>
          <FormControl 
            type="text"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId='formBasicText'>
          <Form.Label>Contact Number: </Form.Label>
          <FormControl 
            type="number"
            placeholder="Phone"
            value={this.state.phone}
            name="phone"
            onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Profile: </Form.Label>
          <FormControl 
            as="textarea"
            rows={3}
            placeholder="Profile"
            value={this.state.profile}
            name="profile"
            onChange={this.handleChange}
            />
          </FormGroup>



          {/* <Form.Label>First Name: <br></br><input type='text' placeholder="First Name" value={this.state.first_name} name="first_name" onChange={this.handleChange}/></Form.Label><p></p>
          <Form.Label>Last Name: <br></br><input type='text' placeholder='Last Name' value={this.state.last_name} name="last_name" onChange={this.handleChange}/></Form.Label><p></p>
          <Form.Label>Practice: <br></br><input type='text' placeholder='Practice' value={this.state.practice} name="practice" onChange={this.handleChange}/></Form.Label><p></p>
          <Form.Label>Profile: <br></br><input type='text' placeholder='Profile' value={this.state.profile} name="profile" onChange={this.handleChange}/></Form.Label><p></p>
          <Form.Label>Position: <br></br><input type='text' placeholder='Position' value={this.state.position} name="position" onChange={this.handleChange}/></Form.Label><p></p>
          <Form.Label>Law School: <br></br><input type='text' placeholder='Law School' value={this.state.law_school} name="law_school" onChange={this.handleChange}/></Form.Label><p></p>
          <Form.Label>Email: <br></br><input type='text' placeholder='Email' value={this.state.email} name="email" onChange={this.handleChange}/></Form.Label><p></p>
          <Form.Label>Contact Number: <br></br><input type='text' placeholder='Contact Number' value={this.state.phone} name="phone" onChange={this.handleChange}/></Form.Label><p></p> */}
          <Button type="submit">Update</Button>
          {/* <input type="submit"/> */}
        {/* </form> */}
        </Form>
      </div>
    )
  }
}
export default connect(null, {lawyerUpdated, updateLawyer})(UpdateLawyer) 