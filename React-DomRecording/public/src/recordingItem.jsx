var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      recordingItem: this.props.recordingItem
    }
  },
  render: function() {
    return (
      <tr key= {this.props.recordingItem.id}>
        <td>{this.state.recordingItem.sessionId}</td>
        <td>{this.state.recordingItem.recordingDate}</td>
        <td>{this.state.recordingItem.totalTime}</td>
        <td>{this.state.recordingItem.share}</td>
        <td>{this.state.recordingItem.tag}</td>
      </tr>
    )
  }
})
