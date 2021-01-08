import React, { Component } from 'react';

class Stateful extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hello: "Hola mundo"
		}
	}

	render() {
		return(
			<h1> {this.hello} </h1>
		)
	}

}

export default Stateful;