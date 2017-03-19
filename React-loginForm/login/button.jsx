var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.buttonClicked} className={this.props.btnClass}>
        {this.props.buttonTitle}
      </button>
    );
  }
});
