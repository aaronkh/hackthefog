import React, { Component } from 'react';
import './contact.css'

class Contact extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  render(){
    return(
      <div>
        <div class="topnav">
              <header>
                <font size="+5" ><a href="index.html"> <h1>Feed the City</h1></a></font>
              </header>
        </div>
        <div class="container">
          <form action="/action_page.php">
            <label for="fname">Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."> </input>
              <label for="lname">Location</label>
              <input type="text" id="lname" name="lastname" placeholder="Your Location.."> </input>
              <label for="country">Restaurant</label>
              <input type="text" id="lname" name="lastname" placeholder="Restaurant.."> </input>
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
              <input type="submit" value="Submit"> </input>
          </form>
        </div>
      </div>)
  }
}

export default Contact