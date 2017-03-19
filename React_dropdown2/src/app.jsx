var Dropdown = require('./dropdown');
var React = require('react');
var ReactDOM = require('react-dom');

var options = {
  items: [
    'cadburuy', 'swiss cho', 'indianMade'
  ]
}
var ele = React.createElement(Dropdown, options);
ReactDOM.render(ele, document.querySelector('.target'));
