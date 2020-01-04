import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import HomePage from '../components/HomePage'
import Register from '../components/Register'
import Login from '../components/Login'
import MovieDetails from '../components/MovieDetails'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact={true} component={HomePage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/movie/:id' component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
