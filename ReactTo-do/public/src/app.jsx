var React = require('react');
var ReactDOM = require('react-dom');
var TodoComponent = require('./todoComponent');

var headerTitle = "TO-DO List";

var ele = React.createElement(TodoComponent, {headerTitle: headerTitle,url:'http://localhost:3000/todo'});
ReactDOM.render(ele,document.querySelector('.todoComponent'));
