import React, { Component } from 'react'
import Footer from './components/Footer'
import ListOfBugs from './components/ListOfBugs'
import BugsForm from './components/BugsForm'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title is-1">Bug Tracker<small>by HACKTIV8</small></h1>
          <BugsForm />
          <ListOfBugs />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
