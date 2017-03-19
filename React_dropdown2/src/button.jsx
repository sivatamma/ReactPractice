var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <button className="btn btn-default" type="button" onClick={this.props.click}>
        {this.props.title}
        <span className={this.props.subtitle}></span>
      </button>
    )
  }
});
