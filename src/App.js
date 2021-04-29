import React, { Component } from 'react';
import './App.css';
import './UI/addBookButton';
import logo from './booksmartlogo.png';
import background from './background.jpg';

import Layout from './Components/Layout';
import Container from './Components/Container';
import Card from './Components/Card';
import SubjectCard from './Components/SubjectCard';

//Configuring logo
console.log(logo);

//created global variable
//var numBooks= 0

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			itemsArray: [],
			numBooks: 0,
			numPages: 0,
			subjects: "",
			bookworkskey: "",
		};
	}

	handleSubmit(value){
		var url = 'https://openlibrary.org/isbn/' + this.state.new + '.json'
		if(this.state.new && (!isNaN(this.state.new) || (this.state.new).includes("-")))
		{
			this.getIsbnJson();
		}
	}

	getIsbnJson(){
			var url = 'https://openlibrary.org/isbn/' + this.state.new + '.json'
			fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					bookworkskey: json.works["0"].key,
					new: '',
					isLoaded: true,
					itemsArray: json,
					itemsArray: this.state.itemsArray.concat([json]),
					numBooks: this.state.numBooks + 1,
					numPages: this.state.numPages + json.number_of_pages,
					
				})
				
			});
		setTimeout(() => { this.getSubject()  }, 200) //need for state update (workskey var)
	

	}

	handleChange(value) {
		this.setState({
			new: value
		});
	}

	getSubject(){
		var url = 'https://openlibrary.org' + this.state.bookworkskey + '.json'
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					subjects: json.subjects[0],
				})
			})
		setTimeout(() => { this.getWorksFromSubject()  }, 200)
	}

	getWorksFromSubject(){
		var url = 'https://openlibrary.org/subjects/' + (this.state.subjects).toLowerCase() + '.json'
		//MUST be lowercase, 
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					subjectArray: (json.works),
				})
			})
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
		
		var {isLoaded, items} = this.state;
		var bookISBN = '9780140328721' //for testing only
		
		if (!isLoaded) {
			return <div> Loading ... </div>;
		}
		else {
			return (
				<Layout>
				<div className="rectangle" />
					<Container>
						<br/><br/>
						<img src={logo} alt="Logo" height="200px" width="200px" />
						<br/><br/>
						<input class="searchBar" type="text" placeholder="Enter ISBN Here" value={this.state.new} onChange={(e) =>this.handleChange(e.target.value)}/>
						<button class="ui primary button" type="submit" onClick={() => this.handleSubmit()}>Add Book</button>
						<h2 align="middle">&nbsp;&nbsp;Your Books</h2>
						<Card items={this.state.itemsArray}/>
						<h3>Number of books read: {this.state.numBooks}</h3>
						<h3/>
						<h2>Congrats! You read this many pages:  {this.state.numPages}</h2>
						<h3> Pages per month:  {(this.state.numPages/12.0).toFixed(2)}</h3>
						<h3> Pages per week:  {(this.state.numPages/52.0).toFixed(2)}</h3>
						<h3> Pages per day:  {(this.state.numPages/365.0).toFixed(2)}</h3>
						<br/><br/>
						<h2 align={"left"}>More In {this.state.Subjects}</h2>
						<SubjectCard subject={this.state.subjectArray}/>
					</Container>
				<div className="rectangle"/>
				</Layout>
			);
		}
	}	
}

export default App;