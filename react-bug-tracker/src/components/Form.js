import React, {Component} from 'react'

import '../App.css'



class Form extends Component{
  render(){
    return(
    <div>
    <div className="container">
      <form className="hero is-medium" onSubmit={this.handleCreate.bind(this)}>
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form action="" id="bugInputForm">
            <label className="label">Description</label>
            <p className="control">
              <input className="input" type="text" id="description" placeholder="Describe a bug..." ref="bug"/>
            </p>
            <label className="label">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity" ref="severity">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." ref="assign"/>
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning" onClick={this.props.handler}>Submit</button>
              </p>
            </div>
          </form>
        </div>
      </form>

      <hr />
    </div>
    </div>
    )
  }
  handleCreate(event){
    event.preventDefault()
    var oldBugs = this.props.buglist || []
    var newBug = {
      bug: this.refs.bug.value,
      severity: this.refs.severity.value,
      assign: this.refs.assign.value
    }
    oldBugs.push(newBug)
    this.props.submitBug(newBug)
    localStorage.setItem('bugs',JSON.stringify(oldBugs))  
  }  
}

export default Form

