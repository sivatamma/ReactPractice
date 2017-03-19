var React = require('react');
var ModalContent = require('./modalContent');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      modalClass: this.props.modalClass
    }
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      modalClass: nextProps.modalClass
    });
  },
  render: function() {
    return (
      <div className={this.state.modalClass}>
        <div className="modal-dialog">
          <ModalContent modalTitle={this.props.modalTitle} handleFormSubmit={this.props.handleFormSubmit} modalStatus={this.props.modalStatus}/>
        </div>
      </div>
    )
  }
});
