import React from 'react';

import {Header, FormAdd, ListReport} from './components'

import './index.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormAdd />
        <hr />
        <ListReport />
      </div>
    );
  }
}

export default App;
