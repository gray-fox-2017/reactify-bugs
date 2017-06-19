import React from 'react'

class ListOfBugs extends React.Component {
  fetchBugs () {
    console.log('aaaaaaaa')
    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
    let listBugsElement = document.getElementById('listBugs')

    console.log(bugs)

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
          <a onclick="setStatusClosed('${id}')" class="is-warning card-footer-item">Close</a>
          <a class="card-footer-item" onclick="deleteBug('${id}')">Delete</a>
        </footer>
      </div>
        <br>`
    }
  }

  render () {
    return (
      <div className="columns" onLoad={this.fetchBugs}>
        <div id="listBugs" className="column is-medium">
        </div>
      </div>
    )
  }
}

export default ListOfBugs
