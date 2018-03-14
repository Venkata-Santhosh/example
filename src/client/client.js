import Home from './components/Home';
import React from 'react';
import ReactDom from 'react-dom';


console.log('hey this is client');


ReactDom.hydrate(<Home/>, document.querySelector('#root'));