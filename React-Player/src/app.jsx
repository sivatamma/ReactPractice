var React = require('react');
var ReactDOM = require('react-dom');
var Player = require('./player');


var ele = React.createElement(Player, {});
ReactDOM.render(ele, document.querySelector('.domPlayer'));
