import React, {Component} from 'react';

import Title from './components/Title.js';
import Form from './components/Form.js'
import Footer from './components/Footer.js'
import ListBugs from './components/ListBugs.js'

const tmp = []
const buglist = [JSON.parse(localStorage.getItem('bugs'))] || []

class BugForm extends Component {
  constructor(props){
    super(props)
      this.state = {
        buglist
      }
  }
  
  render(){
    return (
      <div>
        <Title />
        <Form buglist={this.state.buglist}  submitBug={this.submitBug.bind(this)}/>
        <ListBugs buglist={this.state.buglist} />
        <Footer />
      </div>  
    )
  }
  
  // componentWillMount(){
  //   console.log(buglist);
  //   this.setState({buglist: buglist})
  // }
  // 
  submitBug(bug){
    console.log(bug);
    this.state.buglist.push(bug)  
    this.setState({buglist: this.state.buglist})
    console.log(JSON.stringify(this.state.buglist));
  }
}

export default BugForm