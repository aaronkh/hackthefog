import React, { Component } from 'react';
import logo from './skydaddy.jpg'
import './home.css'
class Home extends Component{
	constructor(props){
		super(props)
		this.state={
		}
	}
	sub(){
		this.props.onSelectPage("sub")
	}
	list(){
		this.props.onSelectPage("list")
	}
	render(){
		return(
			<div className="aa">
        	<div className="topnav">
            	<header>
              		<font size="+5"> <h1>Feed the City</h1></font>
                </header>
        	</div>
                {/*<ul>
                  <li><a href="#">Food Pickup Requests</a></li>
                  <li><a href="#">Add a Pickup Request</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>*/}
            <div className="center">
                     <font size="+2">  <button type="button" onClick={this.sub.bind(this)} >Add a Food Pickup Request</button></font>
                     <font size="+2"> <button type="button" onClick={this.list.bind(this)}  >List of Food Pickups</button></font>
                     <font size="+2"> <button type="button"  >Contact Us</button></font>
         	</div>
        
        <div className="container">
            
            <article>
              <h1>Do Not Waste Food!</h1>
                <h2> Our Mission</h2>
               <p>We want to positively impact lives by providing food to the hungry while reducing food waste in our local community. We believe that no one should be left hungry in a city where there is truly adequate food to provide for all. Therefore, we hope to create an interconnected network where people can work together to eliminate food waste and distribute it to as many people who need it.</p>
                 <img src="skydaddy.jpg" className="qazwsx" alt="doggo"/>
      
                  
            </article>
        </div>
  		
  		</div>)
	}
}


export default Home