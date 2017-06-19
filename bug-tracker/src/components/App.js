import React from 'react';

import Form from './Form'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
          <Form />
          <List />
        </div>
      </div>
    );
  }
}

export default App;
