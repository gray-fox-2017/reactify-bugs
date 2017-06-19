import React, { Component } from 'react';

import Header from './components/Header'
import FormNewBug from './components/FormNewBug'
import ListBugs from './components/ListBugs'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <FormNewBug />
        <ListBugs />
        <Footer />
      </div>
    );
  }
}

export default App;
