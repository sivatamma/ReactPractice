var React = require('react');
var ReactDOM = require('react-dom');
var MaskingSetting = require('./maskingSetting');

var options = {
  modalTitle: "Login Form"
}

var ele = React.createElement(MaskingSetting, options);
ReactDOM.render(ele, document.querySelector('.container'));
