import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { LoginForm } from 'components/LoginForm'
import { RegisterForm } from 'components/RegisterForm'
import { StartPage } from 'components/StartPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  )
}
