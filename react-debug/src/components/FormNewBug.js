import React, { Component } from 'react';

class FormNewBug extends Component {
  handleSubmit(event) {
    const bug = {
      id: new Date(),
      description: document.getElementById('description').value,
      severity: document.getElementById('severity').value,
      assignedTo: document.getElementById('assignedTo').value,
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
             <form id="bugInputForm">
              <label className="label" for="">Description</label>
            <p className="control">
                <input className="input" type="text" id="description" placeholder="Describe a bug..."/>
              </p>
              <label className="label" for="">Severity</label>
            <p className="control">
                <span className="select">
                  <select id="severity" name="severity" >
                    <option value="low">Low</option>
                  <option value="medium">Medium</option>
                <option value="high">High</option>
                  </select>
                </span>
              </p>
              <label className="label" for="">Assigned To</label>
            <p className="control">
                <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..."/>
              </p>
              <div className="control is-grouped">
                <p className="control">
                  <button className="button is-warning" type="submit" onClick={this.handleSubmit}>Submit</button>
                </p>
              </div>
             </form>
          </div>
        </section>
      </div>
    )
  }
}

export default FormNewBug
