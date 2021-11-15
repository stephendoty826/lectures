
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Footer from './components/Footer'
import Friend from './components/Friend'

class App extends Component {

  render() {
    
    return (
      <div>
        <NavBar link1="Home" link2="Contact Us" link3="About Us" />

        <Body info={99}/>

        <Friend firstName="Josh" lastName="Birdwell" age={32}/>
        <Friend firstName="Jonathan" lastName="Doty" age={33}/>
        <Friend firstName="Joseph" lastName="Doty" age={35}/>

        <h2>Hello World</h2>

        <Footer/>
      </div>
    )
  }
}

export default App

