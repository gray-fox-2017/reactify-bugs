import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//


import Footer from './components/template/footer'
import Buglist from './components/bug/buglist'
import Bugform from './components/bug/bugform'




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
          <Bugform/>
          <Buglist/>
        </div>
        <Footer/>
      </div>
    );
  }
}

//
//



export default App;
