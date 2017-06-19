import React from 'react'


class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  saveBug(e) {
    const bug = {
      id: 1,
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

    // document.getElementById('bugInputForm').reset()

    Form.fetchBugs()

    e.preventDefault()
  }


  static fetchBugs(){
    console.log('masuk geleg');
    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
    let listBugsElement = document.getElementById('listBugs')

    listBugsElement.innerHTML = ''

    for(let i = 0; i < bugs.length; i++) {
      let id = bugs[i].id
      let desc = bugs[i].description
      let severity = bugs[i].severity
      let assignedTo = bugs[i].assignedTo
      let status = bugs[i].status

      listBugsElement.innerHTML += `<div className="card">
        <header className="card-header">
          <p className="card-header-title">
          BugId: ${id}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            ${desc}
            <span className="tag is-info">${severity}</span>
            <p>Assigned To: ${assignedTo}</p>
          </div>
          <br>
          <small className="tag is-primary">${status}</small>
        </div>
        <footer className="card-footer">
          <a onClick="setStatusClosed('${id}')" className="is-warning card-footer-item">Close</a>
          <a className="card-footer-item" onClick="deleteBug('${id}')">Delete</a>
        </footer>
      </div>
        <br>`
    }
  }


  render(){
    return (
      <div>
        <br />
        <form action="" id="bugInputForm">
          <label className="label">Add New Bug Report</label>
          <div className="field">
          <label className="label">Description</label>
          <p className="control">
            <input id="description" className="input" type="text" placeholder="Text input" />
          </p>
          </div>

          <label className="label">Severity</label>
          <div className="field">
            <div className="control">
              <div  className="select">
                <select id="severity" name="nilai">
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
          <label className="label">Assigned To</label>
          <p className="control">
            <input id="assignedTo" className="input" type="text" placeholder="Text input" />
          </p>
          </div>


          <button className="button is-warning" onClick={this.saveBug}>Warning</button>
        </form>
        <div className="columns">
          <div className="column is-medium" id="listBugs"></div>
        </div>
      </div>
    )
  }
}

export default Form;
