import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';

// Load Chance
var Chance = require('chance');
// Instantiate Chance so it can be used
var chance = new Chance();

ReactDOM.render(<App />, document.getElementById('root'));

let saveBug = (e) => {
  const bug = {
    id: chance.guid(),
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

  fetchBugs()

  e.preventDefault()
}

document.getElementById('bugInputForm').addEventListener('submit', saveBug)
let fetchBugs = () => {
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
        <a onClick="setStatusClosed('${id}')" class="is-warning card-footer-item">Close</a>
        <a class="card-footer-item" onClick="deleteBug('${id}')">Delete</a>
      </footer>
    </div>
      <br>`
  }
}

const setStatusClosed = (id) => {
  let bugs = JSON.parse(localStorage.getItem('bugs'))

  let updatedBugs = bugs.map((item) => {
    if (item.id === id)
      item.status = 'Close'
    return item
  })

  localStorage.setItem('bugs', JSON.stringify(updatedBugs))
  fetchBugs()

}

const deleteBug = (id) => {
  let bugs = JSON.parse(localStorage.getItem('bugs'))

  let remainingBugs = bugs.filter((item) => {
    return item.id !== id
  })
  localStorage.setItem('bugs', JSON.stringify(remainingBugs))

  fetchBugs()
}
