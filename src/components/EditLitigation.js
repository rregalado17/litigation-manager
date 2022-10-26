import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { updateLitigation, litigationUpdated } from '../store/litigations'
import Form from 'react-bootstrap/Form';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

const EditLitigation = ({lawyers, litProfile}) => {

    const dispatch = useDispatch()

    const [lit, setLit] = useState({
        caption: '',
        lawyer_id: '',
        id: litProfile.id
    })
    console.log(lit)

    const handleChange = e => {
        setLit({...lit, [e.target.name]: e.target.value})
    }
    console.log(lit)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(litProfile.id)
        // let lit = {
        //     ...lit,
        //     id: litProfile.id
        // }
        dispatch(updateLitigation(lit))

    }


  return (
    <div>
        <Form onSubmit={handleSubmit}>
        <FormGroup>
        <Form.Label>Caption: </Form.Label>
        <FormControl
            type='text'
            name='caption'
            defaultValue={litProfile.caption}
            placeholder='Caption'
            onChange={e => {
                lit.caption = e.target.value;
                // setLit(lit)
            }}
            >
        </FormControl>

        <FormControl
            type='number'
            name='lawyer_id'
            defaultValue={litProfile.lawyer.id}
            placeholder='LawyerId'
            onChange={e => {
                lit.lawyer_id = e.target.value;
            }}
            >
        </FormControl>

        <FormControl
            type='text'
            name='status'
            defaultValue={litProfile.status}
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
