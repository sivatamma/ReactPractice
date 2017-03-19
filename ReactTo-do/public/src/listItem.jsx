var React = require('react');
var $ = require('jquery');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      completed: '',
      textChanged: false
    }
  },
  deleteItem: function() {
    this.props.removeItem(this.state.name, this.props.item.id);
  },
  componentWillMount: function() {
    this.state.name = this.props.item.name;
    this.state.completed = this.props.item.completed;
  },
  render: function() {
    var self = this;
    var addButtons = function(){
      if(self.state.textChanged) {
        return (
          <span>
          <button onClick={this.deleteItem} onClick={self.handleSaveClick}>Save</button>
          <button onClick={this.deleteItem} onClick={self.handleUndoClick}>Undo</button>
          </span>
        )
      } else {
        return null;
      }
    }
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon"><span>  <input type="checkbox" checked={this.state.completed} onChange={this.handleCompleteChange} /></span></div>
              <input type="text" className="form-control" onChange={this.handleInputChange} value={this.state.name} />
              <div className="input-group-addon">
                 {addButtons()}
                 <button onClick={this.deleteItem}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  handleSaveClick: function() {
    this.setState({textChanged: false});
    this.updateChange(this.props.item.id, {name : this.state.name });
  },
  handleUndoClick: function(e) {
    this.state.textChanged = false;
    this.setState({name: this.props.item.name});
  },
  handleCompleteChange: function(e) {
    var done = {completed: e.target.checked};
    this.setState(done);
    this.updateChange(this.props.item.id, done);
  },
  handleInputChange: function(e) {
    this.state.textChanged = true;
    this.setState({name: e.target.value});
  },
  updateChange: function(id, data){
    var self = this;
    $.ajax({
      type: 'PUT',
      datatype: 'json',
      url: 'http://localhost:3000/todo/'+id,
      data: JSON.stringify(data),
      contentType :'application/json',
      success: function(){
        console.log("success");
      },
      error: function(xhr, status, err) {
        console.log(status+"  "+err +xhr);
      }
    });
  }
})
