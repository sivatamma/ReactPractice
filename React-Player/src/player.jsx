var React = require('react');
var SeekBar = require('./seekBar');
var $ = require('jquery');
var _ = require('underscore');

module.exports = React.createClass({
  componentWillMount: function() {
  },
  render:function() {
    return (
      <div>
        <SeekBar/>
      </div>
    );
  },
  componentDidMount: function() {

  }
})
