import React, { Component } from 'react';
import './contact.css'

class Contact extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  handlePage(){
    this.props.onSelectPage("home")
  }
  render(){
    return(
      <div>
        <div className="topnav">
              <header onClick={this.handlePage.bind(this)}>
                <font size="+5" ><h1>Feed the City</h1></font>
              </header>
        </div>
        <div className="container">
          <form action="">
            <label >Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name..."/>
              <label >Location</label>
              <input type="text" id="lname" name="lastname" placeholder="Your Location..."/>
              <label >Restaurant</label>
              <input type="text" id="lname" name="lastname" placeholder="Email..."/>
              <label >Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something..." style={{height:"200px"}}></textarea>
              <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>)
  }
}

export default Contact