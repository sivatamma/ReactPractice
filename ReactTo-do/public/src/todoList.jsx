var React = require("react");
var ListItem = require('./listItem');

module.exports = React.createClass({
  render: function() {
    return (
      <ul style= {{listStyle: 'none'}}>
        {this.createListItem()}
      </ul>
    );
  },
  createListItem: function() {
    var self = this;
    var todoItems= this.props.todoList.map(function(item){
      return (
        <ListItem key={item.id} removeItem = {self.props.removeItem} item = {item} />
      );
    });
    return todoItems;
  }
})
