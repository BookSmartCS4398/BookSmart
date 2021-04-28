import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './Components/Card.js'
import logo from './booksmartlogo.png';

test('renders cards without crashing', () => {
  const div = document.createElement('div');
  // create a react element in the div container
  const createdComponent = ReactDOM.render(<App/>, div);
  // Is component non-null? 
  expect(createdComponent).toBeTruthy();
  const cards = div.getElementsByTagName("Cards");
  expect(cards).toBeTruthy(); //if cards exist
  const componentIsDeleted = ReactDOM.unmountComponentAtNode(div);
  expect(componentIsDeleted).toBeTruthy();
});

test('renders, image logo component', () =>{
  const div = document.createElement('div');
  const createdComponent = ReactDOM.render(<App/>, div);
  expect(createdComponent).toBeTruthy();
  const Image = div.getElementsByTagName("img");
  expect(Image).toBeTruthy();
  const componentIsDeleted = ReactDOM.unmountComponentAtNode(div);
  expect(componentIsDeleted).toBeTruthy();
});

test('Existing ISBN, cover grabbed from API', () =>{
	var url = 'https://covers.openlibrary.org/b/isbn/9780140328721-M.jpg';
	expect(<img src={'url'}/>).toBeTruthy();

});

test('Existing ISBN, grabbed from API', () =>{
	var url = 'https://openlibrary.org/isbn/9780140328721.json'
	var jsonItems;

	fetch(url).then(res => res.json()).then(json => {
		this.setState({
			jsonItems: (json),
			jsonItems: this.state.jsonItems.concat([json]),
		})
	});

	expect(jsonItems).toBeTruthy;
});

test('Nonexisting ISBN, cover not grabbed from API', () =>{
	var url = 'https://covers.openlibrary.org/b/isbn/-M.jpg';
	expect(<img src={'url'}/>.src).toBeFalsy();
});

test('Nonexisting ISBN, could not find on API', () =>{
	var url = 'https://openlibrary.org/isbn/.json'
	var items = '';
	fetch(url)
	.then(res => res.json())
	.then(json => {
		this.setState({
			items: (json),
		})
	});
	expect(items).toBeFalsy();
});

test('Incorrect ISBN, not in correct format', () =>{
	var url = 'https://openlibrary.org/isbn/97801a403a28721.json'
	var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+={}[];',./<>?`~"
	expect(url).toEqual(expect.not.stringContaining(chars));
});