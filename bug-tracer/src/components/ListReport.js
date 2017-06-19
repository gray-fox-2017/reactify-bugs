import React from 'react'

import ReportItem from './ReportItem'

class ListReport extends React.Component {

  render() {
    let bugs = JSON.parse(localStorage.getItem('bugs')) || []
    console.log('ini bugs:****** ', bugs);

    return (
      <div className="columns is-mobile">
        <div className="column is-medium">
          {bugs.map((item, index) => {
            return (
              <ReportItem item={item} key={index} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default ListReport