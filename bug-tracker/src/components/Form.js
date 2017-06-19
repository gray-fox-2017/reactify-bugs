import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <form action="" id="bugInputForm">
                <label className="label" for="">Description</label>
                <p className="control">
                    <input className="input" type="text" id="description" placeholder="Describe a bug..." />
                </p>
                <label className="label" for="">Severity</label>
                <p className="control">
                    <span className="select">
                    <select id="severity" name="severity">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        </select>
                    </span>
                </p>
                <label className="label" for="">Assigned To</label>
                <p className="control">
                    <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." />
                </p>
                <div className="control is-grouped">
                    <p className="control">
                        <button className="button is-warning">Submit</button>
                    </p>
                </div>
            </form>
        )
    }
}

export default Form