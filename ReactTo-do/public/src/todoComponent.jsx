var React = require("React");
var HeaderTodo = require("./headerTodo");
var TodoForm = require("./todoForm");
var TodoList = require("./todoList");
var $ = require("jquery");

module.exports = React.createClass({
  getInitialState: function(){
    return {
      todoList: []
    }
  },
  componentDidMount: function() {
    this.getTodoList();
  },
  getTodoList: function() {
    var self = this;
    $.ajax({
      method: 'GET',
      url: self.props.url,
      cache: false,
      datatype: 'json',
      success: function(data) {
        self.setState({todoList: data});
      },
      error: function(xhr, status, error) {
        console.error(self.props.url, status, error.toString());
      }
    });
  },
  addTodoItem: function(todoItemName) {
    var self= this;
    var todoItem = {
      name: todoItemName,
      startDate: Date.now(),
      endDate: "",
      completed: false
    }
    $.ajax({
      type: 'POST',
      url: self.props.url,
      dataType: 'json',
      data: JSON.stringify(todoItem),
      contentType :'application/json',
      success: function(data) {
        self.setState({todoList: data})
      },
      error: function(xhr,status, error){
        console.error(self.props.url, status, error.toString());
      }
    });
  },
  deleteItem: function(item, key) {
    var self = this;
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:3000/todo/'+ key,
      success: function(){
        //self.getTodoList();
        var filterTodoList = self.state.todoList.filter(function(d){
          return d.id != key;
        });
        self.setState({
          todoList: filterTodoList
        })
      },
      error: function(xhr,status, error) {
        console.error(status + error);
      }
    });
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="page-header">
            <HeaderTodo headerTitle= {this.props.headerTitle} />
          </div>
          <div className="row">
            <TodoForm addTodoItem= {this.addTodoItem}/>
          </div>
          <div className="row">
            <TodoList todoList= {this.state.todoList} removeItem={this.deleteItem} />
          </div>
        </div>
      </div>
    );
  }
});
