import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import FormAddBug from './components/FormAddBug'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormAddBug />
        <Footer />
      </div>
    );
  }
}

export default App;
