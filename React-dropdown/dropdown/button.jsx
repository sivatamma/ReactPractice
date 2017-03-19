var React = require('react');


module.exports = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.buttonClicked} className={"btn "+this.props.buttonClassName}>
        {this.props.buttonTitle}
        <span className={this.props.spanTitleClassName}></span>
      </button>
    );
  }
});
