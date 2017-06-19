import React from 'react'

class ReportItem extends React.Component {
  render() {
    const { item } = this.props
    console.log('ini item:^^^^^', item);

    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          BugId: {item.id}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            {item.description}
            <span className="tag is-info">{item.severity}</span>
            <p>Assigned To: {item.assignedTo}</p>
          </div>
          <br />
          <small className="tag is-primary">{item.status}</small>
        </div>
        <footer className="card-footer">
          <a className="is-warning card-footer-item">Close</a>
          <a className="card-footer-item">Delete</a>
        </footer>
      </div>
    )
  }
}

export default ReportItem