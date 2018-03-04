import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './list.js'
import Profile from './profile.js'
import Submission from './sub.js'
import Home from './home.js'
import Contact from './contact.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      page:"home"
    }
  }

  handleChange(val){
    this.setState({page: val})
  }

  render() {
      switch(this.state.page){
        case "home":
          return (<Home
            onSelectPage={this.handleChange.bind(this)}/>)
        case "sub":
          return <Submission
          onSelectPage={this.handleChange.bind(this)}/>
        case "list":
          return <ListItems
          onSelectPage={this.handleChange.bind(this)}/>
        case "contact":
          return <Contact
          onSelectPage={this.handleChange.bind(this)}/>
      }
      
  }
}

export default App;

