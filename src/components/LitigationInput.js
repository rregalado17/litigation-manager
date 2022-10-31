import React, { Component} from 'react'
import { addLitigation, litigationAdded } from '../store/litigations'
import { connect } from 'react-redux'
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

class LitigationInput extends Component {
  state = {
    caption: '',
    court: '',
    judge: '',
    lawyer_id: [],
    status: '',
    opposing_party: '',
    legal_areas: '',
    governing_law: '',
    industry: '',
    claims: '',
    counterclaims: ''
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
        status: '',
        opposing_party: '',
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
            <label><h3>New Litigation Form</h3></label>
            <FormGroup controlId='formBasicDate'>
            <Form.Label>Caption: </Form.Label>
            <FormControl type="text" placeholder='Caption' value={this.state.caption} name="caption" onChange={this.handleChange}/>
            </FormGroup>
            
            <FormGroup controlId='formBasicDate'>
            <Form.Label>Court: </Form.Label>
            <FormControl type="text" placeholder='Court' value={this.state.court} name="court"onChange={this.handleChange} />
            </FormGroup>

            <FormGroup controlId='formBasicDate'>
            <Form.Label>Opposing Counsel: </Form.Label>
            <FormControl 
            type="text"
            placeholder='Opposing Counsel' 
            value={this.state.opposing_party}
            name="opposing_party"
            onChange={this.handleChange}
            />
            </FormGroup>

            <FormGroup controlId='formBasicDate'>
            <Form.Label>Judge: </Form.Label>
            <FormControl 
            type="text"
            placeholder='Judge' 
            value={this.state.judge}
            name="judge"
            onChange={this.handleChange}
            />
            </FormGroup>
            
            <FormGroup controlId='formBasicDate'>
            <Form.Label>Lawyer: </Form.Label>
            <FormControl type="text" placeholder='Lawyer' value={this.state.lawyer_id} name="lawyer_id" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <FormLabel>Case Status:</FormLabel>
            <Form.Control type='text' placeholder='Status' value={this.state.status} name="status" onChange={this.handleChange}>
            {/* <option>Active</option>
            <option>Concluded</option> */}
            </Form.Control>
            </FormGroup>

            <FormGroup>
            <Form.Label>Areas of Law: </Form.Label>
            <FormControl type="text" placeholder='Areas of Law' value={this.state.legal_areas} name="legal_areas" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <Form.Label>Governing Law: </Form.Label>
            <FormControl type="text" placeholder='Governing Law' value={this.state.governing_law} name="governing_law" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup>
            <Form.Label>Industry: </Form.Label>
            <FormControl type="text" placeholder='Industry' value={this.state.industry} name="industry" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup controlId='formBasicText'>
            <Form.Label>Claims: </Form.Label>
            <FormControl type="number" placeholder='Claims' value={this.state.claims} name="claims" onChange={this.handleChange}/>
            </FormGroup>

            <FormGroup controlId='formBasicText'>
            <Form.Label>Counterclaims: </Form.Label>
            <FormControl type="number" placeholder='Claims' value={this.state.counterclaims} name="counterclaims" onChange={this.handleChange}/>
            </FormGroup>

            <p><Button type='submit'>Add Litigation</Button></p> 
        </Form>
      </div>
    )
  }
}

export default connect(null, {litigationAdded, addLitigation})(LitigationInput)