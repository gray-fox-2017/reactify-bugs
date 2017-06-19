import React, { Component } from 'react'

class ListBugs extends Component {
  render() {
    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
    return (
      <div className="columns">
        <div className="column is-medium" id="listBugs">
        {bugs.map((bug, index)=>{
          return (
            <div key={index}>
              <div className="card" >
                <header className="card-header">
                  <p className="card-header-title">
                    BugId: {bug.id}
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    {bug.description}
                    <span className="tag is-info">{bug.severity}</span>
                    <p>Assigned To: {bug.assignedTo}</p>
                  </div>
                <br />
                <small className="tag is-primary">{bug.status}</small>
                </div>
                <footer className="card-footer">
                <a onClick="" className="is-warning card-footer-item">Close</a>
                <a className="card-footer-item" onClick="">Delete</a>
                </footer>
              </div>
              <br />
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default ListBugs
