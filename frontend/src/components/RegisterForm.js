// create form to create new user
//Frida

import React, {useState, Link} from 'react'
import styled from 'styled-components'
import { Heading, FieldContainer, Form, Button, Input } from "./Styling"

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
      
      <div>
      {!registred && ( 
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
            </label> {name.length < 2 && name.length != 0 && (<p>Name is too short</p>
            )}
            {name.length > 20 && (<p>Name is too long</p>
            )}
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
            </label>{password.length < 5 && password.length != 0 && (<p>Password is too short</p>
            )}
            
            <button type="submit" 
            disabled={name.length > 1 && name.length < 21 && password.length > 4 && email ? false : true}
            onClick={handleSubmit}>
                SIGN UP
            </button>
        </form>
      </div>
    )}
    {registred && (
      <div>
        <h2>Registration done!</h2>
        {/* <Link to={`/login`}>
          <h3>Log in!</h3>
        </Link> */}
      </div>
    )}
    </div>
    )
}
