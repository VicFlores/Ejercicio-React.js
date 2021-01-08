import React, {Component} from 'react'

class Button extends Component {
	
	state = {
		count: 0,
	}

	handleClickSum = () => {
		/* Cambia el estado de count con setState */
		this.setState({
			count: this.state.count + 1
		})
	}

	handleClickRest = () => {
		this.setState({
			count: this.state.count - 1
		})
	}
	
	render() {

		const { count } = this.state;

		return(

			<div>

			<h1>Naranjas: {count} </h1>

			<button type='button' onClick={this.handleClickSum}> 
				Agregar
			</button>

			<button type='button' onClick={this.handleClickRest}>
				Quitar
			</button>

			</div>

		)
	}
}

export default Button;

/* const Button = props => {

	const { text } = props

	return (
		<div>
			<button type='button'> { text } </button>
		</div>
	)
} */

