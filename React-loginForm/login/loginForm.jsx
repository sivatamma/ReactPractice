var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      statusMsg: this.props.statusMsg
    };
  },
  handleEmailChange: function(e) {
    this.setState({
      email: e.target.value
    })
  },
  handlePasswordChange: function(e) {
    this.setState({
      password: e.target.value
    })
  },
  handleButtonClick: function(e) {
    if(this.isEmailValid(this.state.email)){
      this.props.handleFormSubmit(this.state.email, this.state.password);
      this.setState({
        email: '',
        password: '',
        statusMsg: ''
      });
    } else {
      this.setState({
        statusMsg: "Email is invalid"
      });
    }
  },
  isEmailValid: function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  componentWillReceiveProps: function(nextProps) {
    console.log("loginForm componentWillReceiveProps", nextProps);
    this.setState({
      statusMsg: nextProps.statusMsg
    });
  },
  render: function() {
    return (
      <form>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input type='email' value= {this.state.email} className='form-control' onChange={this.handleEmailChange} id='exampleInputEmail' placeholder='Email' />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input type='password' value= {this.state.password} onChange={this.handlePasswordChange} className='form-control' id='exampleInputPassword' placeholder='Password' />
        </div>
        <button type="button" onClick= {this.handleButtonClick} className="btn btn-default">Submit</button>
        <span className="has-error">{this.state.statusMsg}</span>
      </form>
    )
  }
});
