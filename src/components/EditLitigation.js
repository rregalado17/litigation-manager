import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { updateLitigation, litigationUpdated } from '../store/litigations'
import Form from 'react-bootstrap/Form';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

const EditLitigation = ({lawyers, litProfile}) => {

    const dispatch = useDispatch()

    const [lit, setLit] = useState({
        caption: litProfile.caption,
        status: litProfile.status,
        lawyer_id: litProfile.lawyer.id,
        id: litProfile.id

    })
    console.log(lit)

    const handleChange = e => {
        setLit({...lit, [e.target.name]: e.target.value})
    }
    console.log(lit)

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
        <Form onSubmit={handleSubmit}>
        <FormGroup>
        <Form.Label>Caption: </Form.Label>
        <FormControl
            type='text'
            name='caption'
            defaultValue={lit.caption}
            placeholder='Caption'
            onChange={e => {
                lit.caption = e.target.value;
            }}
            >
        </FormControl>

        <FormControl
            type='number'
            name='lawyer_id'
            defaultValue={lit.lawyer_id}
            placeholder='LawyerId'
            onChange={e => {
                lit.lawyer_id = e.target.value;
            }}
            >
        </FormControl>

        <FormControl
            type='text'
            name='status'
            defaultValue={lit.status}
            placeholder='Status'
            onChange={e => {
                lit.status = e.target.value;
            }}
            >
        </FormControl>

        <button type='submit'>Update</button>
        </FormGroup>
        </Form>
    </div>
  )
}


export default connect(null, {litigationUpdated, updateLitigation})(EditLitigation)
