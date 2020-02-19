//Linda
import React, { useState, useEffect } from 'react'
import { Form, Input, Label, Heading, Button, FieldContainer } from "./Styling"

// const handleSubmit = (event) => {
//   event.preventDefault()
//   props.onFormSubmit(name, password)
//   setName("")
//   setPassword("")
// }

export const LoginForm = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Form>
      <Heading>Login</Heading>
      <FieldContainer>
        <Label>
          Username
          <Input
            required
            value={name}
            onChange={event => setName(event.target.value)} />
        </Label>
      </FieldContainer>
      <FieldContainer>
        <Label>
          Password
          <Input
            required
            value={password}
            onChange={event => setPassword(event.target.value)} />
        </Label>
      </FieldContainer >

      <Button>Log in </Button>
    </Form >
  )
}
