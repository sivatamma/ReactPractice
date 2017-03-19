var React = require('react');
var LoginForm = require('./loginForm');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="modal-body">
        <LoginForm handleFormSubmit = {this.props.handleFormSubmit} statusMsg= {this.props.modalStatus}/>
      </div>
    )
  }
});
