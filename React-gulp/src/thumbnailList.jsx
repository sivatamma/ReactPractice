var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports= React.createClass({
  render: function() {
    console.log(this.props.thumbnailList);
    var list = this.props.thumbnailList.map(function(thumbnailProps){
      return <Thumbnail {...thumbnailProps}/>
    });
    return (<div class="row">
      {list}
      </div>);
  }
});
