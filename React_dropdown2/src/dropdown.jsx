var React = require('react');
var Button = require('./button');
var ListItem = require('./item');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      open: false
    }
  },
  handleBtnClick: function() {
    this.setState({
      open: !this.state.open
    });
  },
  handleItemClick:function(item) {
    this.setState({
      open:false,
      btnMsg: item
    })
  },
  render: function(){
    console.log(this.props.items);
    var self = this;
    var list = this.props.items.map(function(item,i){
      console.log(item === self.state.btnMsg,item,self.state.btnMsg);
      return (
        <ListItem itemClass={item === self.state.btnMsg?"active":""} listItem={item} key={i} itemClicked={self.handleItemClick}/>
      );
    });
    return (
      <div className="dropdown">
        <Button title={this.state.btnMsg || 'message'} subtitle='caret' click={this.handleBtnClick}/>
        <ul className={"dropdown-menu "+(this.state.open===true?"show":"")}>
          {list}
        </ul>
      </div>
    )
  }
});
