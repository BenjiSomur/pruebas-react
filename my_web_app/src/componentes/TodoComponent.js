import React, { Component } from 'react';
import axios from 'axios';



class TodoComponent extends Component{

	componentDidMount(){
		axios.post('http://localhost:5000/api/miuv/datos', {user: 'zS16011721',
			pass: 'Barcelona_Benji2016',})
		  .then(result=>{
		  	console.log(result);
		  }).catch(console.log);
	}

	render(){
		return(<h1>Prueba API</h1>);
	}
}

export default TodoComponent;

