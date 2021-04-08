import React, { Component } from 'react';
import './App.css';

import Layout from './Componets/Layout';
import Header from './Componets/Header';
import Container from './Componets/Container';
import Card from './Componets/Card';

//created global variable
//var numBooks= 0

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			itemsArray: [],
			itemsTemp: [],
			numBooks: 0,
			numPages: 0,
		};
	}
	
	handleSubmit(value){
		var url = 'https://openlibrary.org/isbn/' + this.state.new + '.json'
		
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					new: '',
					isLoaded: true,
					itemsArray: json,
					itemsArray: this.state.itemsArray.concat([json]),
					numBooks: this.state.numBooks + 1,
					numPages: this.state.numPages + json.number_of_pages,

				})
				
			});
	}

	handleChange(value) {
		this.setState({
			new: value
		});
	}
	
	componentDidMount() {

		var url = 'https://openlibrary.org/isbn/.json'
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json,
				})
			});
	}

	render() {
		
		var {isLoaded, items } = this.state;
		var bookISBN = '9780140328721' //for testing only
		
		if (!isLoaded) {
			return <div> Loading ... </div>;
		}
		else {
			return (
				<Layout>
					<Container>
						<input type="text" value={this.state.new} onChange={(e) =>this.handleChange(e.target.value)} />
						<input type="submit" value="Add Book" onClick={() => this.handleSubmit()} />
						<h2 align="left">&nbsp;&nbsp;Your Books</h2>
						<Card items={this.state.itemsArray}/>
						<h3>Number of books read: {this.state.numBooks}</h3>
						<h3/>
						<h2>Congrats you read this many pages:  {this.state.numPages}</h2>
						<h3> Pages per month:  {(this.state.numPages/12.0).toFixed(2)}</h3>
						<h3> Pages per week:  {(this.state.numPages/52.0).toFixed(2)}</h3>
						<h3> Pages per day:  {(this.state.numPages/365.0).toFixed(2)}</h3>
					</Container>
				</Layout>
			);
		}
	}

	
}

export default App;