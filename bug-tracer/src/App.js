import React from 'react';

import {Header, FormAdd, ListReport, Footer} from './components'

import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bugs: [],
      id: '',
      description: '',
      severity: '',
      assignedTo: '',
      status: ''
    }

    this.handleDesc = this.handleDesc.bind(this)
    this.handleAssignTo = this.handleAssignTo.bind(this)
    this.handleSeverity = this.handleSeverity.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleDesc(e) {
    console.log(e.target.value);
    this.setState({description: e.target.value})
  }
  handleAssignTo(e) {
    console.log(e.target.value);
    this.setState({assignedTo: e.target.value})
  }
  handleSeverity(e) {
    console.log(e.target.value);
    this.setState({severity: e.target.value})
  }

  componentWillMount() {
    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
    this.setState({
      bugs: bugs
    })
    console.log('waktu willmount', bugs);
  }

  handleSubmit(e) {
    e.preventDefault()

    const bug = {
      id: new Date(),
      description: this.state.description,
      severity: this.state.severity,
      assignedTo: this.state.assignedTo,
      status: 'Open'
    }

    console.log('data input: ', bug);

    this.setState({
      bugs: this.state.bugs.push(bug)
    })
    // console.log('#########', this.state.bugs);

    localStorage.setItem('bugs', JSON.stringify(this.state.bugs))

    this.componentWillMount()

    this.setState({
      description: '',
      severity: '',
      assignedTo: '',
    })
  }

  handleDelete(e) {
    // e.preventDefault()
    console.log('di app.js', e.target.id);
    let bugs = JSON.parse(localStorage.getItem('bugs'))
    if (bugs.length > 0) {
      let bugs = JSON.parse(localStorage.getItem('bugs'))
      alert('Are you sure want to delete this report?')

      let remainingBugs = bugs.filter((item, index) => item.id !== e.target.id)
      localStorage.setItem('bugs', JSON.stringify(remainingBugs))

      this.componentWillMount()
    } else {
      return (
        alert('Data is empty')
      )
    }
  }

  handleEdit(e) {
    // e.preventDefault()
    console.log('di app.js', e.target.id);
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    alert('Are you sure want to close this report?')
    let updatedBugs = bugs.map((item) => {
      if (item.id === e.target.id)
        item.status = 'Close'
      return item
    })

    localStorage.setItem('bugs', JSON.stringify(updatedBugs))

    this.componentWillMount()
  }

  render() {
    return (
      <div>
        <Header />
        <FormAdd description={this.state.description} assignedTo={this.state.assignedTo} severity={this.state.severity} handleSubmit={this.handleSubmit} handleDesc={this.handleDesc} handleAssignTo={this.handleAssignTo} handleSeverity={this.handleSeverity} />
        <hr />
        <ListReport bugs={this.state.bugs} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
      </div>
    );
  }
}

export default App;
