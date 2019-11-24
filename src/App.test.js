import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should return true', () => {
    console.log('true');
});

it('should return true', () => {
    console.log('true');
});

it('should return true', () => {
    console.log('true');
});

it('should fail', () => {
    throw new Error('Does this work!?');
});
