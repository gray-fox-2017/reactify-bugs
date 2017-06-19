import React, { Component } from 'react';
import chance from 'chance'

class FormNewBug extends Component {
  constructor(props){
    super(props);
    this.state = {
      bugName: 'asdfasd',
      assignedTo: 'asdas',
      severity: 'asdas'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      bugName: event.target.value,
      assignedTo: event.target.value,
      severity: event.target.value
    })
  }
  handleSubmit(event) {
    const bug = {
      id: "asdadada",
      description: '',
      severity: '',
      assignedTo: '',
      status: 'Open'
    }

    let bugs = []
    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'))
    }
    bugs.push(bug)
    localStorage.setItem('bugs', JSON.stringify(bugs))

    event.preventDefault();
  }
  render() {
    return (
      <div>
        <section className="hero is-medium">
          <div className="hero-body">
            <h2 className="title">Add New Bug Report:</h2>
            {/* <form onSubmit={this.handleSubmit} id="bugInputForm"> */}
              <label className="label" for="">Description</label>
            <p className="control">
                <input className="input" value={this.state.bugName} type="text" id="description" placeholder="Describe a bug..." onChange={this.handleChange}/>
              </p>
              <label className="label" for="">Severity</label>
            <p className="control">
                <span className="select">
                  <select id="severity" name="severity" value={this.state.severity} onChange={this.handleChange}>
                    <option value="low">Low</option>
                  <option value="medium">Medium</option>
                <option value="high">High</option>
                  </select>
                </span>
              </p>
              <label className="label" for="">Assigned To</label>
            <p className="control">
                <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." value={this.state.assignedTo} onChange={this.handleChange}/>
              </p>
              <div className="control is-grouped">
                <p className="control">
                  <button className="button is-warning" type="submit" onClick={this.handleSubmit}>Submit</button>
                </p>
              </div>
            {/* </form> */}
          </div>
        </section>
      </div>
    )
  }
}

export default FormNewBug
