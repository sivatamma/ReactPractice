var React = require('react');
var dropdown = require('./dropdown');

var options = {
    dropdownTitle : "select chocolates",
    items: [
      'cadburuy', 'swiss cho', 'indianMade'
    ]
}

var ele = React.createElement(dropdown, options);
React.render(ele, document.querySelector('.container'));
