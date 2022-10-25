import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { updateLitigation, litigationUpdated } from '../store/litigations'
import Form from 'react-bootstrap/Form';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

const EditLitigation = ( {lawyers, litProfile} ) => {

    // const dispatch = useDispatch()
    const [caption, setCaption] = useState({
        caption: litProfile.caption
    })

    console.log(litProfile)

    const handleSubmit = e => {
        e.preventDefault()     
    }
    // const handleChange = e => {
    //     setCaption({...caption, [e.target.name]: e.target.value})
    //   };
    // const handleChange = (event) => {
    //     setLitigation({...litigation, [event.target.name]: event.target.value})
    // }
    // const handleChange = (e) => {
    //     setLitigation((litigation) => ({
    //         ...litigation,
    //         [e.target.name]: e.target.value
    // }))
    // }
    //   handleSubmit = (event) => {
    //     event.preventDefault()
    //     let litigation = {
    //       ...this.state, 
    //       id: this.props.litigations.id
    //     }
    //     this.props.updateLitigation(litigation)
    //     this.setState({
    //         caption: '',
    //         court: '',
    //         judge: '',
    //         lawyer_id: '',
    //         status: '',
    //         complaint_date: '',
    //         legal_areas: '',
    //         governing_law: '',
    //         industry: '',
    //         claims: '',
    //         counterclaims: ''
    //     })
    return (
    <>
        <Form onSubmit={handleSubmit}>
        <div>

            <Form.Label>Caption: </Form.Label>
            <input
                type="text" 
                placeholder="Caption" 
                value={caption}
                name="caption" 
                onChange={event => setCaption(event.target.value)}>
            </input>

        </div>
        </Form>       
        
    </>
      )
}

export default connect(null, {litigationUpdated, updateLitigation})(EditLitigation)
