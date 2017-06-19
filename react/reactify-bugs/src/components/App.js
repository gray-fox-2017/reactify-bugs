import React from 'react';

import './App.css';
import Form from './Form.js'
import Footer from './Footer.js'
import ListBugs from './ListBugs.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>

          <Form />
          <hr />

          <div className="columns">
            <div className="column is-medium" id="listBugs">
              <ListBugs />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
