import React, { Component } from 'react';

import BugForm from './components/BugForm'
import BugsList from './components/BugsList'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <BugForm />
          <BugsList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
