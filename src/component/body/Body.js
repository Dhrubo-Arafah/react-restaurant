import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Menu from './Menu'
import { Route, Redirect, Switch } from 'react-router-dom';
function Body() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    </div>
  )
}

export default Body
