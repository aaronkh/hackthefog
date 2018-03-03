import React, { Component } from 'react';
import {food} from './foodbank.js'

class ListItems extends Component{

	constructor(props){
		super(props)
		this.state = {}
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
				<div className="center-text">
					<div>
						<font size = "5" >
							{locationAddress}
						</font>
					</div>
					<div onclick="fn()">
						Item: {obj.item}

					</div>
					<div>
						Category: {obj.category}
					</div>
				</div>
			)
		})
	}
}
export default ListItems