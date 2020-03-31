import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/CardList/CardList';
import { SearchBox } from './components/SearchBox/SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(monsters => {
				this.setState({monsters})
			})
	}

	searchBoxHandler = (event) => {
		this.setState({searchField: event.target.value});
	}
	
	render() {
		const filteredMonsters = this.state.monsters.filter(monster => {
			return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox onChange={(event) => this.searchBoxHandler(event)}/>
				<CardList monsters={filteredMonsters}/>
			</div>
		);
	}
}

export default App;
