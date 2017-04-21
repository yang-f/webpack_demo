
import React from 'react';
import ReactDOM from 'react-dom';
import ProductBox from './components/productBox.js';

let App = React.createClass({
  render(){
    return (
      <ProductBox />
    );
  }
});

ReactDOM.render(<App/>,document.getElementById('content'));
