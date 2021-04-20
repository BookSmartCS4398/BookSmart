import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
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
 ;
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