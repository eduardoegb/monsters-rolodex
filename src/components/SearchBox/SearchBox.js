import React from 'react';
import './SearchBox.css'

export const SearchBox = (props) => {
	return (
		<input 
		className="SearchBox" 
		type="search" 
		placeholder="Search for monsters" 
		onChange={props.onChange}
		/>
	)
}