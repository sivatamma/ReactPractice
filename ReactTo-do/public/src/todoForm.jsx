var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      todoText:''
    }
  },
  handleInputChange: function(e) {
    this.setState({todoText: e.target.value})
  },
  handleButtonClick: function(e) {
    console.log("clicked");
    e.preventDefault();
    this.state.todoText.trim() && this.props.addTodoItem(this.state.todoText);
    this.state.todoText = '';
  },
  render: function() {
    return (
      <form>
        <div className="col-md-6">
          <div className="form-group">
            <input type="text" value={this.state.todoText} className="form-control" onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="col-md-3">
          <button type="submit" className="btn btn default" onClick={this.handleButtonClick} >Create Todo</button>
        </div>
      </form>
    );
  }
})
