var React = require('react');
var RecordingItem = require('./recordingItem');
var $ = require('jquery');
var _ = require('underscore');
var recordingList = [];


module.exports = React.createClass({
  getInitialState: function() {
    return {
      recordingList : [],
      allowedFields: this.props.allowedFields,
      sort:{
        field:"recordingDate"
      }
    }
  },
  componentWillMount: function() {
    this.fields= Object.keys(this.state.allowedFields);
  },
  render:function() {
    return (
      <div className="table-responsive">
        <table className="table">
          {this.tableHeader()}
          {this.tableBody()}
        </table>
      </div>
    );
  },
  componentDidMount: function() {
    var self = this;
    $.ajax({
      type:'GET',
      dataType:'json',
      contentType:'application/json',
      url: 'http://localhost:3001/recordingList',
      success: function(data) {
        self.setState({
          recordingList: data
        })
      },
      error: function(xhr, status, error) {
        console.log(xhr + "  " + status +"  "+ error);
      }
    });
  },
  handleClickHeader: function(fieldName) {
    var self = this;
    return function(event) {
      if(self.state.sort.field === fieldName){
        self.state.sort.order = self.state.sort.order === "asc" ? 'desc' : 'asc';
      } else {
        self.state.sort.field = fieldName;
        self.state.sort.order = "asc"
      }
      self.sort(fieldName, self.state.sort.order);
    }
  },
  sort: function(field, sortOrder) {
    var sortedItems = _.sortBy(this.state.recordingList, field);
    if(sortOrder === 'desc'){
      sortedItems = sortedItems.reverse();
    }
    this.setState({
      recordingList : sortedItems
    });
  },
  tableHeader: function() {
    var self = this;
    return (
      <thead style={{cursor:'pointer'}}>
        <tr>
          {
            self.fields.map(function(fieldName, index) {
              var fieldClass;
              if(fieldName === self.state.sort.field) {
                if("asc" === self.state.sort.order) {
                  fieldClass = "success";
                } else {
                  fieldClass = "danger"
                }
              }
              return (
                <th key={index} className = {fieldClass} onClick={self.handleClickHeader(fieldName)}>{self.state.allowedFields[fieldName].name}</th>
              )
            })
          }
        </tr>
      </thead>
    )
  },
  tableBody: function() {
    var self = this;
    return (
      <tbody>
          {
            self.state.recordingList.map(function(recordingItem){
              return (<RecordingItem recordingItem= {recordingItem}  key={recordingItem.id}/>)
            })
          }
      </tbody>
    )
  }
})
