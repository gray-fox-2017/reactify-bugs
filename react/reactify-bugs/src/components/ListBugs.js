import React from 'react'

class ListBugs extends React.Component {
  close() {
    console.log('close');
  }
  delete() {
    console.log('delete');
  }
  render() {
    return (
      <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          BugId: thisId
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            Desc
            <span className="tag is-info">severity</span>
            <p>Assigned To: asignedTo</p>
          </div>
          <br />
          <small className="tag is-primary">status</small>
        </div>
        <footer className="card-footer">
          <a onClick={this.close} className="is-warning card-footer-item">Close</a>
          <a onClick={this.delete} className="card-footer-item">Delete</a>
        </footer>
      </div>
      <br />
      </div>
    )
  }
}

export default ListBugs;
