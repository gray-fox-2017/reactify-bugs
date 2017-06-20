import React, {Component} from 'react'
import _ from 'lodash'
import Bugs from './Bugs.js'

import '../App.css'



class ListBugs extends Component{
  listBugs(){
    return _.map(this.props.buglist,(bug,index)=><Bugs key={index+1}{...bug} />)
  }
    render(){
      return(
        <div className='container'>
          <div className='hero-body'>
            <div className="columns">
              <div className="column is-medium" id="listBugs">
                {this.listBugs()}
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default ListBugs