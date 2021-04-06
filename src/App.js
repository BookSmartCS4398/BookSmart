import './App.css';
import React, { Component } from 'react';

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
					numBooks: this.state.numBooks+1,
					numPages: this.state.numPages+ json.number_of_pages,
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
				<div className="App">
					
                <input type="text" value={this.state.new} onChange={(e) =>this.handleChange(e.target.value)} />
                <input type="submit" value="Add Book" onClick={() => this.handleSubmit()} />

					<h2 align="left">Your Books</h2>
					<table>
					  <thead>
						<tr>				
							<div>
								{this.state.itemsArray.map(item => (
									<div key={item.publishers}>Title: {item.title} | Pages: {item.number_of_pages}</div>
								))}
							</div>
						</tr>
					  </thead>
					  <tbody>         
					  </tbody>
					</table>
										
					<h3>Number of books read: {this.state.numBooks}</h3>
					<h3></h3>
					<h2>Congrats you read this many pages:  {this.state.numPages}</h2>
					<h3> Pages per month:  {(this.state.numPages/12.0).toFixed(2)}</h3>
					<h3> Pages per week:  {(this.state.numPages/52.0).toFixed(2)}</h3>
					<h3> Pages per day:  {(this.state.numPages/365.0).toFixed(2)}</h3>
				</div>
			);
		}
	}

	
	//calculate the total pages
	calculateAvgMonth() {

		
	}
}

export default App;