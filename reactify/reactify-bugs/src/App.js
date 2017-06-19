import React from 'react';

import BugReport from './components/bug-report-form';
// import BugList from './components/bug-list'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
        <BugReport />
      </div>
    );
  }
}

export default App;
