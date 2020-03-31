import React from 'react';
import './Card.css'

export const Card = props => {
	const {name, username, id} = props.monster
	return (
		<div className="Card">
			<img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={username}/>
			<h3>{name}</h3>
		</div>
	)
}