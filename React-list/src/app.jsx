var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

var ele = React.createElement(List);
ReactDOM.render(ele, document.querySelector('.target'));
