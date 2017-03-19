var React = require("React");

module.exports = React.createClass({
  render: function() {
    return (
       <h1>{this.props.headerTitle}</h1>
    );
  }
});
