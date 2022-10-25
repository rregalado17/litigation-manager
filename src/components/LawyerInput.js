import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {lawyerAdded}  from '../store/lawyers'
import {addLawyer}  from '../store/lawyers'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl, FormGroup } from 'react-bootstrap';


class LawyerInput extends React.Component {

  state = {
    first_name: '', 
    last_name: '',
    profile: '',
    position: '',
    practice: '',
    law_school: '',
    phone: ''
}

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault()
    this.props.addLawyer(this.state)
    this.setState({
        first_name: '', 
        last_name: '',
        profile: '',
        position: '',
        practice: '',
        law_school: '',
        phone: ''
    })
}

render() {
    return (
        <div> 
            <Form onSubmit={this.handleSubmit}><br></br>
                <h3>New Lawyer Form</h3><br></br>
                <FormGroup controlId='formBasicText'>
                    <Form.Label>First Name: </Form.Label>
                    <FormControl 
                        type='text' 
                        placeholder='First Name' 
                        value={this.state.first_name} 
                        name="first_name" 
                        onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId='formBasicText'>
                    <Form.Label>Last Name: </Form.Label>
                    <FormControl 
                        type='text' 
                        placeholder='Last Name' 
                        value={this.state.last_name} 
                        name="last_name" 
                        onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup controlId='formControlsTextarea'>
                    <Form.Label>Profile: </Form.Label>
                    <FormControl 
                        type='text' 
                        placeholder='Profile' 
                        value={this.state.profile} 
                        name="profile" 
                        onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId='formBasicText'>
                    <Form.Label>Position: </Form.Label>
                    <FormControl 
                        type='text' 
                        placeholder='Position' 
                        value={this.state.position} 
                        name="position" 
                        onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId='formBasicText'>
                    <Form.Label>Practice: </Form.Label>
                    <FormControl 
                        type='text' 
                        placeholder='Practice' 
                        value={this.state.practice} 
                        name="Practice" 
                        onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId='formBasicText'>
                    <Form.Label>Law School: </Form.Label>
                    <FormControl 
                        type='text' 
                        placeholder='Law School' 
                        value={this.state.law_school} 
                        name="law_school" 
                        onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId='formBasicText'>
                    <Form.Label>Contact Number: </Form.Label>
                    <FormControl 
                        type='integer' 
                        placeholder='Contact Number' 
                        value={this.state.phone} 
                        name="contact_number" 
                        onChange={this.handleChange}/>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
}
export default connect(null, {lawyerAdded, addLawyer})(LawyerInput)