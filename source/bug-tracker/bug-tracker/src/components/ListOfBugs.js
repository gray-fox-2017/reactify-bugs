import React from 'react'

class ListOfBugs extends React.Component {
  constructor () {
    super ()
    this.state = {
      bugs: []
    }
  }

  componentDidMount () {
    let bugs = fetchBugs()
    this.setState({bugs: bugs})
  }

  render () {
    return (
      <div className="columns">
      {this.state.bugs.map((bug, index) => {
        return <div key={index} id="listBugs" className="column is-one-quarter">
          <div className="card">
            <header className="card-header">
              BugId: {bug.id}
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
              <a onClick={() => {setStatusClosed(bug.id)}} className="is-warning card-footer-item">Close</a>
              <a onClick={() => {deleteBug(bug.id)}}className="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
      })}
      </div>
    )
  }
}

function fetchBugs () {
  return JSON.parse(localStorage.getItem('bugs')) || []
}

function setStatusClosed (id) {
  let bugs = JSON.parse(localStorage.getItem('bugs'))

  let updatedBugs = bugs.map((item) => {
    if (item.id === id)
      item.status = 'Close'
    return item
  })

  localStorage.setItem('bugs', JSON.stringify(updatedBugs))
  fetchBugs()
}

function deleteBug (id) {
  let bugs = JSON.parse(localStorage.getItem('bugs'))

  let remainingBugs = bugs.filter((item) => {
    return item.id !== id
  })
  localStorage.setItem('bugs', JSON.stringify(remainingBugs))

  fetchBugs()
}

export default ListOfBugs
