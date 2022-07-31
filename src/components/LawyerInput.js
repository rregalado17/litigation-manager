import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { addLawyer } from '../actions/addLawyer'



class LawyerInput extends React.Component {

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

    return (){
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Submit Your New Lawyer Form</label>
          <p><input type='text' placeholder='First Name' /></p>
          <p><input type='text' placeholder='Last Name'  /></p>
          <p><input type='submit' /></p>
        </form>
      </div>
  }
}

export default connect(null, {addLawyer})(LawyerInput)