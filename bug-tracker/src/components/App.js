import React from 'react';

import Form from './Form';
import List from './List';
import Footer from './Footer';

class App extends React.Component {
  render() {
    const bugs = this._getBugs();
    return (
      <div>
        <div className="container">
          <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
          <Form />
          <hr />
          {bugs}
          <Footer />
        </div>
      </div>
    );
  }

  _getBugs() {
    let bugs = [];
    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'));
    }

    return bugs.map((bug) => {
      return (
        <List
          description={bug.description} severity={bug.severity} status={bug.status} assignedTo={bug.assignedTo} id={bug.id} key={bug.id}/>
      );
    })
  }
}

export default App;
