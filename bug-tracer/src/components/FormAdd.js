import React from 'react'

class FormAdd extends React.Component {
  // saveBug(e) {
  //   const bug = {
  //     id: new Date(),
  //     description: document.getElementById('description').value,
  //     severity: document.getElementById('severity').value,
  //     assignedTo: document.getElementById('assignedTo').value,
  //     status: 'Open'
  //   }
  //
  //
  // }

  render() {
    return (
      <div>
        <section className="hero is-medium">
          <div className="hero-body">
            <h2 className="title">Add New Bug Report:</h2>
            <form>
              <label className="label">Description</label>
              <p className="control">
                <input onChange={this.props.handleDesc} className="input" type="text" id="description" placeholder="Describe a bug..." value={this.props.description}/>
              </p>
              <label className="label">Severity</label>
              <p className="control">
                <span className="select">
                  <select id="severity" name="severity" onChange={this.props.handleSeverity} value={this.props.severity}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </span>
              </p>
              <label className="label">Assigned To</label>
              <p className="control">
                <input onChange={this.props.handleAssignTo} className="input" type="text" id="assignedTo" placeholder="Enter responsible..." value={this.props.assignedTo} />
              </p>
              <div className="control is-grouped">
                <p className="control">
                  <button className="button is-warning" onClick={this.props.handleSubmit}>Submit</button>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default FormAdd