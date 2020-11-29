import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AmongUs from './views/AmongUs'
import Main from './views/Main'
import GroupsCreation from './views/GroupsCreation'
import TresEnRaya from './views/TresEnRaya'
import Multiplayer from './views/Multiplayer'
import Individual from './views/Individual'
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/among" component={AmongUs} />
        <Route exact path="/tres" component={TresEnRaya} />
        <Route exact path="/tres/multi" component={Multiplayer} />
        <Route exact path="/tres/indi" component={Individual} />
        <Route exact path="/groups" component={GroupsCreation} />
        <Route exact path="/" component={Main} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App

