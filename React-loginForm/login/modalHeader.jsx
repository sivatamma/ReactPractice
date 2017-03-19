var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="modal-header">
        {this.props.closeButton}
        <h4 className="modal-title">{this.props.modalTitle}</h4>
      </div>
    )
  }
});
