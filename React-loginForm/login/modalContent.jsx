var React = require('react');
var ModalHeader = require('./modalHeader');
var ModalBody = require('./modalBody');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="modal-content">
        <ModalHeader modalTitle={this.props.modalTitle}/>
        <ModalBody handleFormSubmit={this.props.handleFormSubmit} modalStatus={this.props.modalStatus}/>
      </div>
    )
  }
});
