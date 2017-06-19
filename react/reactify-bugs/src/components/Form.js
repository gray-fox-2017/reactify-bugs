import React from 'react'

class Form extends React.Component {
  saveBug (e) {
    const bug = {
      // id: chance.guid(),
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

    document.getElementById('bugInputForm').reset()

    // fetchBugs()

    e.preventDefault()
  }

  render() {
    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form action="" id="bugInputForm">
            <label className="label" htmlFor="">Description</label>
            <p className="control">
              <input className="input" type="text" id="description" placeholder="Describe a bug..." />
            </p>
            <label className="label" htmlFor="">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label" htmlFor="">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." />
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning" onClick={this.saveBug}>Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Form;
