var React = require('react');

module.exports = React.createClass({
  handleClick: function() {
    this.props.itemClicked(this.props.listItem);
  },
  render: function(){
    return (
      <li className={this.props.itemClass} onClick={this.handleClick}><a href="#">{this.props.listItem}</a></li>
    )
  }
});
