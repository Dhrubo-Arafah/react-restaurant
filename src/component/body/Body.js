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
        <Route path={process.env.PUBLIC_URL + "/" } exact component={Home} />
        <Route path={process.env.PUBLIC_URL + "/menu"} exact component={Menu} />
        <Route path={process.env.PUBLIC_URL + "/about"} exact component={About} />
        <Route path={process.env.PUBLIC_URL + "/contact"} exact component={Contact} />
        <Redirect from={process.env.PUBLIC_URL + "/"} to={process.env.PUBLIC_URL + "/home"}></Redirect>
      </Switch>
    </div>
  )
}

export default Body
