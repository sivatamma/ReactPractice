'use strict';

writeToScreen('Initial', 'primary');

var Welcome = React.createClass({
  displayName: 'Welcome',

  getInitialState: function getInitialState() {
    writeToScreen('GetInitialState', 'info');
    return { foo: 1 };
  },

  getDefaultProps: function getDefaultProps() {
    writeToScreen('GetDefaultProps', 'info');
    return { bar: 2 };
  },

  update: function update() {
    writeToScreen('Updating State', 'primary');
    this.setState({ foo: 2 });
  },

  render: function render() {
    writeToScreen('Render', 'success');
    return React.createElement(
      'div',
      null,
      'This.state.foo: ',
      this.state.foo,
      ' ',
      React.createElement('br', null),
      'This.state.bar: ',
      this.props.bar,
      React.createElement('br', null),
      React.createElement('hr', null),
      React.createElement(
        'button',
        { className: 'btn btn-success',
          onClick: this.update },
        'Update State'
      )
    );
  },

  componentWillMount: function componentWillMount() {
    writeToScreen('ComponentWillMount', 'warning');
  },

  componentDidMount: function componentDidMount() {
    writeToScreen('ComponentDidMount', 'warning');
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    writeToScreen('ShouldComponentUpdate', 'info');
    return true;
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    writeToScreen('ComponentWillRecieveProps', 'warning');
  },

  componentWillUpdate: function componentWillUpdate() {
    writeToScreen('ComponentWillUpdate', 'warning');
  },

  componentDidUpdate: function componentDidUpdate() {
    writeToScreen('ComponentDidUpdate', 'warning');
  },

  componentWillUnmount: function componentWillUnmount() {
    writeToScreen('componentWillUnmount', 'danger');
  }
});

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return { id: 1 };
  },

  update: function update() {
    writeToScreen('Updating Props', 'primary');
    this.setState({ id: 2 });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement('hr', null),
      React.createElement(Welcome, { bar: this.state.id }),
      React.createElement('hr', null),
      React.createElement(
        'button',
        { type: 'button', className: 'btn btn-primary',
          onClick: this.update },
        'Update Props'
      )
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('app'));

var unmountBtn = document.getElementById('unmount');
unmountBtn.addEventListener('click', unmount);

function unmount() {
  writeToScreen('Unmounting', 'primary');
  React.unmountComponentAtNode(document.getElementById('app'));
  unmountBtn.remove();
}

function writeToScreen(msg, level) {
  var elem = document.getElementById('screen');
  elem.innerHTML += '<div class="log bg-' + level + '">' + '<span class="glyphicon glyphicon-ok"></span> &nbsp;&nbsp;' + msg + '</div>';
}
