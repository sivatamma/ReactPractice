var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <button className="btn btn-primary" type="button">
            {this.props.text}
            <span className="badge">
            {this.props.count}
            </span></button>;
  }
});
