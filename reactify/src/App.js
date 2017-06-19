import React, { Component } from 'react';

import BugsForm from './components/BugsForm'
import ListBugs from './components/ListBugs'
import BrandBanner from './components/BrandBanner'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <BrandBanner />
          <BugsForm />
          <ListBugs />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
