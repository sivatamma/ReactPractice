var React = require('react');
var _ = require('underscore');
//var ListItem = require('./listItem');

module.exports= React.createClass({
  getInitialState: function() {
    return {
      list:{},
      sort:{
        field:'rollnum',
        type:'asc'
      }
    }
  },
  componentWillMount: function() {
    var studentlist = [{
      name:'siva',
      rollnum:'2014181',
      city:'hyderabad'
    },
    {
      name:'abc',
      rollnum:'123456',
      city:'vijayawada'
    },
    {
      name:'kumar',
      rollnum:'2014180',
      city:'vizag'
    },
    {
      name:'reddy',
      rollnum:'2014182',
      city:'tuni'
    },
    {
      name:'tamma',
      rollnum:'2014185',
      city:'ameenpur'
    }
  ];
  console.log(Object.keys(studentlist[0]));
  this.setState({
    list: studentlist,
    headerlist: Object.keys(studentlist[0])
  });
  },
  render: function(){
    return (
      <table className="table">
        {this.tableHeader()}
        {this.tableBody()}
       </table>
    )
  },
  handleHeaderClick: function(e) {
    console.log(e);
    var self = this;
    //return function(event) {
    var fieldName = e.target.textContent;
      self.state.sort.field = fieldName;
      self.state.sort.type = (self.state.sort.type === 'asc' ? 'desc' : 'asc');
      self.sort(fieldName,self.state.sort.type);
    //}
  },
  sort: function(fn, order) {
    var sortedItems = _.sortBy(this.state.list, fn);
    if(order === 'desc') {
      sortedItems = sortedItems.reverse();
    }
    this.setState({
      list:sortedItems
    })
  },
  tableHeader: function() {
    var self = this;
    return (
      <thead>
        <tr>
          {
            self.state.headerlist.map(function(item, i){
              return (
                <th key={i} onClick={self.handleHeaderClick}>{item}</th>
                )
            })
          }
        </tr>
      </thead>
    )
  },
  tableBody: function() {
    return (
      <tbody>
          {
            this.state.list.map(function(item, i){
              console.log(item,i);
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.rollnum}</td>
                  <td>{item.city}</td>
                </tr>
              )
            })
          }
      </tbody>
    )
  }
});
