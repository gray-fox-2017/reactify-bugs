import React from 'react'

import ReportItem from './ReportItem'

class ListReport extends React.Component {

  render() {
    console.log('++++++++', this.props.bugs);
    if (this.props.bugs.length > 0) {
      return (

        <div className="columns is-mobile">
          <div className="column is-medium">
            {this.props.bugs.map((item, index) => {
              return (
                <ReportItem item={item} key={index} handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit}/>
              )
            })}
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
}

export default ListReport