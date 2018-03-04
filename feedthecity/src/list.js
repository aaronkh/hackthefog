import React, { Component } from 'react';
import {food} from './foodbank.js'
import {Button, Icon, MediaBox, CardPanel} from 'react-materialize'

// function fn(){
// 	document.getElementById('item').style.visibility='visible';
// }
class ListItem extends Component{
	constructor(props){
		super(props)
		this.state={
			pickedup : false
		}
	}
	fn(){
		this.setState({
			pickedup: !this.state.pickedup
		})
		console.log(this.state.pickedup)
	}
	render(){
		return (<div className="left-text list-item">
					<div>
						<font size = "5" >
							{this.props.locationAddress}
						</font>
					</div>
					<div>
						<CardPanel className="teal lighten-4 black-text">
						    <p> Item : {this.props.item} </p>
						    <p> Category : {this.props.category} </p>
						    <Button onClick = {this.fn.bind(this)} floating large className='red' waves='light' icon={this.state.pickedup?'close':'check'} />
						    <MediaBox src = {this.props.picture} height = "100" caption = {this.props.description} className="right-image"/>

						</CardPanel>
						    
					</div>
					
				</div>)
	}
}
class ListItems extends Component{

	constructor(props){
		super(props)
		this.state = {

		}
	}

	render(){
		let temp = JSON.parse(food)
		let addresses = []
		return temp.map((obj, i) => {
			let locationAddress = ''
			if(!addresses.includes(obj.location.address)){
				locationAddress = obj.location.address
				addresses.push(obj.location.address)
			}
			return(
				<ListItem item={obj.item}
				key={i}
				category={obj.category}
				picture={obj.picture}
				description={obj.description}
				locationAddress = {locationAddress}></ListItem>
			)
		})
	}
}

export default ListItems