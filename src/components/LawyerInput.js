import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
// import { addLawyer } from '../actions/addLawyer'
import {lawyerAdded}  from '../store/lawyers'

class LawyerInput extends React.Component {

  state = {first_name: '', last_name: ''}

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault()
    this.props.lawyerAdded(this.state)
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
export default connect(null, {lawyerAdded})(LawyerInput)
// export default (LawyerInput)
    // const handleSubmit = (event) => {
    //   event.preventDefault()
    //   this.props.addLawyer(this.state)
    //   this.setState({
    //     first_name: '', last_name: ''
    //   })
    //   console.log(event)
    // }
  
  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <label>Submit Your New Lawyer Form</label>
  //       <p><input type='text' placeholder='First Name' value={firstName} name="first_name" onChange={e => setFirstName(e.target.value)} /></p>
  //       <p><input type='text' placeholder='Last Name' value={lastName} name="last_name" onChange={e => setLastName(e.target.value)} /></p>
  //       <p><input type='submit' /></p>
  //     </form>
  //   </div>
  // )
  // }





// const lawyersArray = useSelector((store) => store.lawyer.lawyers)



// export default (LawyerInput)

//const LawyerInput = ({ lawyersArray}) =>  {

  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');
    
  //   const handleChange = (e) => {
  //       this.setState({
  //         [e.target.name]: e.target.value
  //       })
  //       console.log(e)
  //     }
  
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const data = {
  //       first_name: firstName,
  //       last_name: lastName 
  //     }
     
  //     // addLawyer(data)
  //     console.log(data)
  //   }