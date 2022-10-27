import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { updateLitigation, litigationUpdated } from '../store/litigations'
import Form from 'react-bootstrap/Form';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

const EditLitigation = ({ litProfile}) => {

    const lawyers = useSelector((store) => store.lawyers.list)

    console.log(lawyers)
    const lawyer = lawyers.map((law) => {
        return law.first_name, law.last_name})

    const dispatch = useDispatch()

    const [lit, setLit] = useState({
        caption: litProfile.caption,
        status: litProfile.status,
        lawyer_id: litProfile.lawyer.id,
        id: litProfile.id,
        court: litProfile.court,
        opposing_party: litProfile.opposing_party,
        judge: litProfile.judge,
        complaint_date: litProfile.complaint_date,
        legal_areas: litProfile.legal_areas,
        governing_law: litProfile.governing_law,
        industry: litProfile.industry,
        claims: litProfile.claims,
        counterclaims: litProfile.counterclaims,
        lawyer: ''

    })
    
    const handleChange = e => {
        setLit({...lit, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        let litigations = {
            ...lit,
            id: litProfile.id
        }
        dispatch(updateLitigation(litigations))
    }

  return (
    <div>

        <Form.Label>Lawyer: {lawyer}</Form.Label>
        <Form.Select 
           type='' 
           name='lawyer.id' 
           options={lawyer}
           getoptionlabel={lawyer}
           // getOptionValue={({lawyer_id}) => lawyer_id } 
           defaultValue={lawyer} 
           placeholder='LawyerId' 
           onChange={console.log(lawyer)}>
       </Form.Select>   

       <Form.Label>Lawyer: </Form.Label>
        <Form.Select>
           <option>'Select Menu'</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
       </Form.Select> 




        <Form onSubmit={handleSubmit}>
        <FormGroup>
        <Form.Label>Caption: </Form.Label>
        <FormControl
            type='text' name='caption' defaultValue={lit.caption} placeholder='Caption' onChange={e => {lit.caption = e.target.value;}}>
        </FormControl>

        <Form.Label>Court: </Form.Label>
        <FormControl
            type='text' name='court' defaultValue={lit.court} placeholder='Court' onChange={e => {lit.court = e.target.value;}}>
        </FormControl>

        <Form.Label>Judge: </Form.Label>
        <FormControl
            type='text' name='judge' defaultValue={lit.judge} placeholder='Judge' onChange={e => {lit.judge = e.target.value;}}>
        </FormControl>

        <Form.Label>Opposing Counsel: </Form.Label>
        <FormControl
            type='text' name='opposing_party' defaultValue={lit.opposing_party} placeholder='Opposing Counsel' onChange={e => {lit.opposing_party = e.target.value;}}>
        </FormControl>

        <Form.Label>Status: </Form.Label>
        <FormControl type='text' name='status' defaultValue={lit.status} placeholder='Status' onChange={e => {lit.status = e.target.value;}}>
        </FormControl>

        <Form.Label>Date of Complaint: </Form.Label>
        <FormControl type='date' name='Complaint Date' defaultValue={lit.complaint_date} placeholder='Status' onChange={e => {lit.complaint_date = e.target.value;}}>
        </FormControl>

        <Form.Label>Areas of Law: </Form.Label>
        <FormControl type='text' name='Areas of Law' defaultValue={lit.legal_areas} placeholder='Areas of Law' onChange={e => {lit.legal_areas = e.target.value;}}>
        </FormControl>

        <Form.Label>Governing Law: </Form.Label>
        <FormControl type='text' name='governing_law' defaultValue={lit.governing_law} placeholder='Governing Law' onChange={e => {lit.governing_law = e.target.value;}}>
        </FormControl>
       
        <Form.Label>Industry: </Form.Label>
        <FormControl type='text' name='industry' defaultValue={lit.industry} placeholder='Industry' onChange={e => {lit.industry = e.target.value;}}>
        </FormControl>

        <Form.Label>Claims: </Form.Label>
        <FormControl type='number' name='claims' defaultValue={lit.claims} placeholder='Claims' onChange={e => {lit.claims = e.target.value;}}>
        </FormControl>

        <Form.Label>Counterclaims: </Form.Label>
        <FormControl type='number' name='counterclaims' defaultValue={lit.industry} placeholder='Industry' onChange={e => {lit.counterclaims = e.target.value;}}>
        </FormControl>
        
        {/* <Form.Label>Lawyer: </Form.Label>
        <FormControl type='number' name='lawyer_id' defaultValue={lit.lawyer_id} placeholder='LawyerId' onChange={e => {lit.lawyer_id = e.target.value;}}>
        </FormControl> */}

        <button type='submit'>Update</button>
        </FormGroup>
        </Form>
    </div>
  )
}


export default connect(null, {litigationUpdated, updateLitigation})(EditLitigation)
