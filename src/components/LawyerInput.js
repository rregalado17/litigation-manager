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
    })
}

render() {
    return (
        <div> 
            <Form onSubmit={this.handleSubmit}>
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


                {/* <Form.Label>First Name: <input type='text' placeholder='First Name' value={this.state.first_name} name="first_name" onChange={this.handleChange}/></Form.Label><br></br> */}





                
                <Form.Label>Last Name: <input type='text' placeholder='Last Name' value={this.state.last_name} name="last_name" onChange={this.handleChange}/></Form.Label><br></br>
                <Form.Label>Profile: <input type='text' placeholder='Profile' value={this.state.profile} name="profile" onChange={this.handleChange}/></Form.Label><br></br>
                <Form.Label>Position: <input type='text' placeholder='Position' value={this.state.position} name="position" onChange={this.handleChange}/></Form.Label><br></br>
                <Form.Label>Practice: <input type='text' placeholder='Practice' value={this.state.practice} name="practice" onChange={this.handleChange}/></Form.Label><br></br>
                <Form.Label>Email address: </Form.Label>
                <Form.Control type="email" placeholder='Email' value={this.state.email} name="email" onChange={this.handleChange} />
                <Form.Label>Law School: <input type='text' placeholder='Law School' value={this.state.law_school} name="law_school" onChange={this.handleChange}/></Form.Label><br></br>
                <Form.Label>Contact Number: <input type='number' placeholder='Contact Number' value={this.state.phone} name="phone" onChange={this.handleChange}/></Form.Label><br></br>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
}
export default connect(null, {lawyerAdded, addLawyer})(LawyerInput)