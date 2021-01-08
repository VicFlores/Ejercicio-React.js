import React from 'react'

const HolaMundo = () => {
	
	const hello = 'Hola Vic Flores';
	const isTrue = true;
	
	return (
		<div className="HolaMundo">
			<h1> {hello} </h1>
			<h2>Curso basico de React.js</h2>
			<img src="https://arepa.s3.amazonaws.com/react.png" alt="React img"/>
			
			{ isTrue ? <h4>Esto es verdadero</h4> : <h5>Esto es falso</h5> }
			{ isTrue && <h4>Soy verdadero</h4> }
			
		</div>
	)
}

export default HolaMundo;

