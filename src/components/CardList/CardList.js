import React from 'react'
import { Card } from '../Card/Card'
import './CardList.css'

export const CardList = (props) => {
	return (
		<div className="CardList">
			{props.monsters.map(monster => {
				return (
					<Card monster={monster} key={monster.id}/>
				)
			})}
		</div>
	)
}