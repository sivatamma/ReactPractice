var React = require('react');
var Modal = require('./modal');
var Button = require('./button');
var maskingService = require('./maskingService');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      modalClass: 'modal fade',
      maskingText: '',
      status: '',
      modalStatus: ''
    }
  },
  buttonClicked: function(e) {
    var self = this;
    self.setState({
      modalClass: 'modal fade in'
    });
    self.setState({
      status: ''
    });
  },
  handleTextChange: function(e) {
    this.setState({
      maskingText: e.target.value
    });
  },
  handleLoginSubmit: function(email, password) {
    var self = this;
    var data = {
      email: email,
      password: password,
      masking: this.state.maskingText
    };
    maskingService.saveMaskingSettings(data, function(error, data) {
      console.log(error);
      if(error) {
        var errObj = JSON.parse(error.responseText);
        self.setState({
          modalStatus: errObj.error
        });
      } else {
        self.setState({
          modalClass: "modal fade",
          modalStatus: ""
        });
        self.setState({
          status: 'Successfully saved'
        });
      }
    });
  },
  render: function() {
    return (
      <div>
        <textarea className="form-control" id="maskingText" rows={20} value= {this.state.maskingText} onChange={this.handleTextChange}></textarea>
        <Modal modalTitle= {this.props.modalTitle} modalClass= {this.state.modalClass} handleFormSubmit= {this.handleLoginSubmit} modalStatus= {this.state.modalStatus}/>
        <Button buttonClicked= {this.buttonClicked} btnClass= {"btn btn-primary"} buttonTitle= {"Save Masking Settings"} />
        <span className="saveStatus">{this.state.status}</span>
      </div>
    )
  }
});
