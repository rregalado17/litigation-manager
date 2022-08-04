import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addLawyer } from '../actions/addLawyer'

// const lawyersArray = useSelector((store) => store.lawyer.lawyers)

class LawyerInput extends React.Component {

    handleChange = (event) => {
      // this.setState({
      //   [event.target.name]: event.target.value
      // })
      console.log(event)
    }

    handleSubmit = (event) => {
      event.preventDefault()
      // this.props.addLawyer(this.state)
      // this.setState({
      //   first_name: '', last_name: ''
      // })
      console.log(event)
    }

    render (){
      return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Submit Your New Lawyer Form</label>
          <p><input type='text' placeholder='First Name' onChange={this.handleChange} /></p>
          <p><input type='text' placeholder='Last Name' onChange={this.handleChange} /></p>
          <p><input type='submit' /></p>
        </form>
      </div>
    )
  }
}

export default connect(null, {addLawyer})(LawyerInput)