import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AmongUs from './containers/AmongUs'
import Main from './containers/Main'
import GroupsCreation from './containers/GroupsCreation'
import TresEnRaya from './containers/TresEnRaya'
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/among" component={AmongUs} />
        <Route exact path="/tres" component={TresEnRaya} />
        <Route exact path="/groups" component={GroupsCreation} />
        <Route exact path="/" component={Main} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App

