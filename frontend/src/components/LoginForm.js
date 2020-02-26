import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Label, Heading, Button, FieldContainer } from "./Styling";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //useHistory this to route to "StartPage" when login succeeded.
  const history = useHistory();

  const url = "https://auth-api-lindfrid.herokuapp.com/sessions";

  const handleSignin = event => {
    event.preventDefault();
    setErrorMessage("");
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        //(res.status !== 201) detta ger alltid error message även om det är rätt:
        //(!res.ok) ger undefined accessToken om det är fel men inget error message
        if (!res.ok) {
          throw new Error("Your e-mail and/or password was incorrect");
        } else {
          return res.json();
        }
      })
      .then(({ accessToken }) => {
        if (accessToken) {
          window.localStorage.setItem("accessToken", accessToken);
          history.push(`/secret`);
        }
      })
      .catch(err => {
        setErrorMessage(err.message);
      });
  };

  const reDirect = () => {
    history.push(`/register`);
  };

  return (
    <FieldContainer>
      <Form>
        <Heading>Sign-in</Heading>
        <Label>
          Email
          <Input
            type="email"
            required
            value={email}
            onChange={event => setEmail(event.target.value.toLowerCase())}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Label>
        <div>{errorMessage}</div>
        <Button type="submit" onClick={handleSignin}>
          LOGIN
        </Button>
        <Button type="button" onClick={reDirect}>
          Not a member?
        </Button>
      </Form>
    </FieldContainer>
  );
};
