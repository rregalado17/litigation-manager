import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {lawyerAdded}  from '../store/lawyers'
import {addLawyer}  from '../store/lawyers'


class LawyerInput extends React.Component {

  state = {first_name: '', last_name: ''}

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault()
    this.props.addLawyer(this.state)
    this.setState({
        first_name: '', last_name: ''
    })
}

render() {
    return (
        <div> 
            <form onSubmit={this.handleSubmit}>
                <label><h3>New Lawyer Form</h3></label>
                <p><input type='text' placeholder='First Name' value={this.state.first_name} name="first_name" onChange={this.handleChange}/></p>
                <p><input type='text' placeholder='Last Name' value={this.state.last_name} name="last_name" onChange={this.handleChange}/></p>
                {/* <p><input type='value' placeholder=''></input></p> */}
                <input type="submit"/>
            </form>

        </div>
    )
}
}
export default connect(null, {lawyerAdded, addLawyer})(LawyerInput)