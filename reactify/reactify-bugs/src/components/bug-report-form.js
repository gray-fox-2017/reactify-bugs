import React from 'react'
import Chance from 'chance'



class BugReport extends React.Component {
  constructor(){
    super()
    this.fetchBugs = this.fetchBugs.bind(this)
    this.saveBug = this.saveBug.bind(this)
  }

  componentDidMount() {
    this.fetchBugs()
  }

  render() {
    return (
      <section>
        <div className="container">
          <section className="hero is-medium">
            <div className="hero-body">
              <h2 className="title">Add New Bug Report:</h2>
              <form action="" id="bugInputForm">
                <label className="label" >Description</label>
                <p className="control">
                  <input className="input" type="text" id="description" placeholder="Describe a bug..."/>
                </p>
                <label className="label" >Severity</label>
                <p className="control">
                  <span className="select">
                    <select id="severity" name="severity">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </span>
                </p>
                <label className="label" >Assigned To</label>
                <p className="control">
                  <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..."/>
                </p>
                <div className="control is-grouped">
                  <p className="control">
                    <button className="button is-warning" onClick={this.saveBug}>Submit</button>
                  </p>
                </div>
              </form>
            </div>
          </section>

          <hr />

          <div className="columns">
            <div className="column is-medium" id="listBugs"></div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                &copy; HACKTIV8
              </p>
            </div>
          </div>
        </footer>
      </section>
    )
  }

  saveBug(e) {
    var bug = {
      id: new Chance().guid(),
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

    this.fetchBugs()

    e.preventDefault()
  }

  fetchBugs() {
    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
    let listBugsElement = document.getElementById('listBugs')

    listBugsElement.innerHTML = ''

    for(let i = 0; i < bugs.length; i++) {
      let id = bugs[i].id
      let desc = bugs[i].description
      let severity = bugs[i].severity
      let assignedTo = bugs[i].assignedTo
      let status = bugs[i].status

      listBugsElement.innerHTML += `<div class="card">
        <header class="card-header">
          <p class="card-header-title">
          BugId: ${id}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            ${desc}
            <span class="tag is-info">${severity}</span>
            <p>Assigned To: ${assignedTo}</p>
          </div>
          <br>
          <small class="tag is-primary">${status}</small>
        </div>
        <footer class="card-footer">
          <a onclick="BugReport.setStatusClosed('${id}')" class="is-warning card-footer-item">Close</a>
          <a onClick={console.log(this)} class="is-warning card-footer-item">Close</a>
          <a onClick={tes} class="is-warning card-footer-item">Close</a>
          <a class="card-footer-item" onclick="BugReport.deleteBug('${id}')">Delete</a>
        </footer>
      </div>
        <br>`
    }
  }

  setStatusClosed(id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let updatedBugs = bugs.map((item) => {
      if (item.id === id)
        item.status = 'Close'
      return item
    })

    localStorage.setItem('bugs', JSON.stringify(updatedBugs))

    BugReport.fetchBugs()

  }

  static deleteBug(id) {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let remainingBugs = bugs.filter((item) => {
      return item.id !== id
    })
    localStorage.setItem('bugs', JSON.stringify(remainingBugs))

    BugReport.fetchBugs()
  }
}

export default BugReport