// create form to create new user
//Frida

import React, {useState} from 'react'
import styled from 'styled-components'
import { Heading, FieldContainer, Form, Button, Input } from "./Styling"

const url = "http://localhost:8080/users"

export const RegisterForm = () => {
const [name, setName] = useState("")
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")

const handleSubmit = event => {
  event.preventDefault()
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-Type': 'application/json'}
  })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log('Error:', err))
}
    return (
      <div>
      <h2>Register form</h2>
      <form onSubmit={handleSubmit}>
          <p>Name</p>
          <label>
            <input
              type="text"
              required
              value={name}
              onChange={event => setName(event.target.value)}>
            </input>
          </label>
          <p>Email</p>
          <label>
            <input
              type="text"
              required
              value={email}
              onChange={event => setEmail(event.target.value)}>
            </input>
          </label>
          <p>Password</p>
          <label>
            <input
              type="password"
              required
              value={password}
              onChange={event => setPassword(event.target.value)}>
            </input>
          </label>
          
          <button type="submit" 
          onClick={handleSubmit} 
          // disabled={name && password ? true : false}
          >
              SIGN UP
          </button>
      </form>
    </div>
      // <FieldContainer>
      //   <Heading>Register form</Heading>
      //   <Form
      //   onKeyPress={(e) => {
      //       if (e.key === 'Enter') { handleSubmit(name) }
      //     }}>
      //       <Input
      //         type="text"
      //         onChange={event => setName(event.target.value)}>
      //       </Input>
      //       {/* <Input
      //         type="password"
      //         onChange={event => setName(event.target.value)}>
      //       </Input> */}
      //       <Button type="submit" onClick={handleSubmit} disabled={name.length < 5 || name.length > 40 ? true : false}>
      //           Submit
      //       </Button>
      //   </Form>
      // </FieldContainer>
    )
}
