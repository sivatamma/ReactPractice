var React = require('react');

module.exports = React.createClass({
  handleClick: function() {
    this.props.whenClicked(this.props.item);
  },
  render: function(){
    return (
      <li className={this.props.className}>
        <a style={{cursor: 'pointer'}} onClick={this.handleClick}>{this.props.item}</a>
      </li>
    );
  }
});
