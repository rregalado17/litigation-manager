import React, { Component, useState } from 'react'

class EditLitigation extends Component {

  state = {
    caption: '',
    court: '',
    judge: '',
    lawyer_id: [],
    status: ''
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
        status: ''
    })
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default (EditLitigation)