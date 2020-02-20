// create form to create new user
//Frida

import React, {useState, Link} from 'react'
import styled from 'styled-components'
import { Heading, FieldContainer, Form, Label, Input, Button } from "./Styling"

const url = "http://localhost:8080/users"

export const RegisterForm = () => {
const [name, setName] = useState("")
const [password, setPassword] = useState("")
const [email, setEmail] = useState("")
const [registred, setRegistred] = useState(false)

const handleSubmit = event => {
  event.preventDefault()
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-Type': 'application/json'}
  })
    // .then(res => {
    //   if (res.status !== 200) {
    //     throw new Error("Not 200");
    //   } else {
    //     return res;
    //   } })
    .then(res => res.json())
    .then(setRegistred(true))
    .catch(err => console.log('Error:', err))
}
    return (
      
      <FieldContainer>
      {!registred && ( 
      <FieldContainer>
        <Heading>Register form</Heading>
        <Form onSubmit={handleSubmit}>
            
            <Label>
              <Input
                type="text"
                required
                value={name}
                onChange={event => setName(event.target.value)}>
              </Input>
            </Label>
            Name {name.length < 2 && name.length != 0 && (" is too short"
            )}
            {name.length > 20 && (" is too long"
            )}
            <Label>
              <Input
                type="text"
                required
                value={email}
                onChange={event => setEmail(event.target.value)}>
              </Input>
            </Label>
            Email
            <Label>
              <Input
                type="password"
                required
                value={password}
                onChange={event => setPassword(event.target.value)}>
              </Input>
            </Label>
            Password {password.length < 5 && password.length != 0 && (" is too short"
            )}
            
            <Button type="submit" 
              disabled={name.length > 1 && name.length < 21 && password.length > 4 && email ? false : true}
              onClick={handleSubmit}>
                SIGN UP
            </Button>
        </Form>
      </FieldContainer>
    )}
    {registred && (
      <FieldContainer>
        <Heading>Registration done!</Heading>
        {/* <Link to={`/login`}>
          <Heading>Log in!</Heading>
        </Link> */}
      </FieldContainer>
    )}
    </FieldContainer>
    )
}
