var React = require('react');
var ReactDOM = require('react-dom');

var Alert = require('react-bootstrap/lib/Alert');
// or
var Alert = require('react-bootstrap').Alert;
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
const MyButtonComponent = React.createClass({
  render: function() {
    return (
      <button onClick={function(e){alert("MyButtonComponent");}} class="MyButtonComponent">MyButtonComponent</button>
    )
  }
});

var Frame = require('react-frame-component');

const AlertDismissable = React.createClass({
  getInitialState() {
    return {
      alertVisible: true
    };
  },
  buttonClicked: function() {
    alert("heeloo hiii");
  },
  getModalInstance: function() {
    console.log("________");
    var modalInstance = (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <MyButtonComponent/>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={function(){alert("heeellllo")}}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    );
    return modalInstance;
  },
  render() {
    if (this.state.alertVisible) {
      console.log("***********------------");
      return (
        <Frame className= "myclass" initialContent='<!DOCTYPE html><html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></head><body><h1>i wont be changed</h1><div id="mountHere"></div></body></html>' mountTarget='#mountHere'>
          {this.getModalInstance()}
        </Frame>
      );
    }
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
});

React.render(<AlertDismissable />, document.body);
