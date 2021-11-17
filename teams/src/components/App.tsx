import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Container} from 'reactstrap'
import {AppNavBar} from './AppNavBar'
import {AppRoutes} from './AppRoutes'

export const App = () => {
  return (
    <Router>
      <AppNavBar />
      <Container>
        <AppRoutes />
      </Container>
    </Router>
  )
}
