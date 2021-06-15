import React from 'react'
import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Popup from './Popup'
import Foreground from './Foreground.js'

function App () {
  return (
    <Router>
      <div style={styles.container}>
        <div style={styles.navbar}>
          <h1> Here my finances - Options </h1>
          <nav>
            <ul>
              <li>
                <Link to='/'></Link>
              </li>
              <li>
                <Link to='/popup'></Link>
              </li>
              <li>
                <Link to='/foreground'></Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path='/popup'>
            <Popup />
          </Route>
          <Route exact path='/foreground'>
            <Foreground />
          </Route>
          <Route exact path='/'>
            <Redirect to='/options.html'/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const styles = {
  main: {
    width: '300px',
    height: '600px'
  },
  container: {

  },
  navbar: {

  }
}

export default App
