import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Button, Heading, Wrapper } from "./Styling"


const url = "http://localhost:8080/secrets";

export const StartPage = props => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  //Getting the accessToken from the browser's localStorage
  //and sending it as the header "Authorization"
  const accessToken = window.localStorage.getItem("accessToken");

  useEffect(() => {
    setErrorMessage("");
    fetch(url, {
      method: "GET",
      headers: { Authorization: accessToken }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Access denied", JSON);
        } else {
          return res.json()
        }
      })
      .then(json => setMessage(json.secret))
      .catch(err => {
        setErrorMessage(err.message);
      });
  }, [accessToken]);

  return (
    <Wrapper>
      {message &&
        <div>
          <Heading>You're logged in!</Heading>
          <Heading>{message}</Heading>
          <img src="https://i.giphy.com/media/d7rSiIwVhNMIURGiMw/giphy.webp"></img>
        </div>
      }
      <div>
        {errorMessage && <div>{errorMessage}</div>}
        <Button
          onClick={() => window.localStorage.removeItem("accessToken")}
          type="button"
        >
          <Link to={`/`}>
            Log out</Link>
        </Button>
      </div>
    </Wrapper>
  )
}

