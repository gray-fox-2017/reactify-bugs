import React, {Component} from 'react'

class Bugs extends Component {
  render(){
    return(
      <div>
      <tr>
        <td> {this.props.bug} </td>
        <td> {this.props.severity} </td>
        <td> {this.props.assign} </td>
        <td> <button>Edit</button> | <button onClick={this.deleteBug()}> Delete </button> </td>
      </tr>
      </div>
    )
  }
  
  deleteBug(key){
    
  }
}

export default Bugs