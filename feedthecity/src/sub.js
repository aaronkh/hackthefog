import React, { Component } from 'react';
import {food, account} from './foodbank.js'
import {Button, Icon, Input,Card } from 'react-materialize'
import Dropzone from 'react-dropzone'

//TODO: request location
class Submission extends Component{
	constructor(props){
		super(props)
		this.state={
			dropzoneVisible:true,
			picture:'test picture',
			category:'',
			description:'',
			address:'600 Pennsylvania Ave, Washington D.C.'
		}
	}
	onDrop (accept) {
	 	this.setState({
	 		dropzoneVisible:false,
		 	picture: accept[0].preview
		 })
	}
	handleDescriptionChange(e){
		this.setState({description:e.target.value})
	}
	handleCatChange(e){
		this.setState({category:e.target.value})
	}
	handleAddressChange(e){
		this.setState({address:e.target.value})
	}
	home(){
		this.props.onSelectPage("home")
	}
	sub(){
		console.log(this.state.description)
		console.log(this.state.category)
		console.log(this.state.picture)
	}
	render(){
		return (<div className = "list-item moreshadow">
					<Card>
						<div>
							<font size = "10">
								Submit Food Item: 
							</font>
						</div>
						<Dropzone
						accept = "image/*"
						multiple = "false"
						className={(this.state.dropzoneVisible?'': 'hidden')}
						onDrop = {this.onDrop.bind(this)}
						/>
						<p  className={(this.state.dropzoneVisible?'': 'hidden')}> Insert Image Above </p>
						<img className={!this.state.dropzoneVisible?'':'hidden'} height = "200" width = "200" src={this.state.picture}/>
						 <Input onChange={this.handleDescriptionChange.bind(this)} type='textarea' placeholder="Enter a description..."/>
						 <Input onChange={this.handleCatChange.bind(this)} s={12} type='select' label='Category of Food' >
	      					<option value='Fruit'>Fruit</option>
	      					<option value='Vegetables'>Vegetables</option>
	      					<option value='Bread/Pastries'>Bread/Pastries</option>
	      					<option value='Dairy'>Dairy</option>
	      					<option value='Meat'>Meat</option>
	      					<option value='Canned Goods'>Canned Goods</option>
	      					<option value='Other'>Other</option>    				
	      				</Input>
	      				<Input onChange={this.handleAddressChange.bind(this)} s={12}  placeholder="Address..."><Icon>location_on</Icon></Input>
	      				<Button s={12} className = "right-button" onClick={this.sub.bind(this)}>Submit</Button>
						<div s={12} onClick={this.home.bind(this)} className="fake-button">BACK</div>
	      			</Card>
				</div>)
	}
}

export default Submission