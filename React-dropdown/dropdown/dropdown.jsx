var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    this.state.toggle= (this.state.toggle === 'show' ? '' : 'show');
    this.setState({toggle: this.state.toggle});
  },
  getInitialState: function() {
    return {
      toggle: ''
    }
  },
  handleClickItem: function(item) {
    this.setState({
      toggle: '',
      buttonTitle: item
    });
  },
  render: function() {
    var self = this;
    var list = self.props.items.map(function(item) {
      return (<ListItem item={item}
                whenClicked={self.handleClickItem}
                className={self.state.buttonTitle === item ? "active" : "" } />);
    });

    return (
      <div className="dropdown">
          <Button
            buttonClicked= {this.handleClick}
            buttonClassName = {'btn-default'}
            buttonTitle = {this.state.buttonTitle || this.props.dropdownTitle}
            spanTitleClassName= 'caret'/>
        <ul className={"dropdown-menu "+(this.state.toggle)}>
          {list}
        </ul>
      </div>
    );
  }
});
