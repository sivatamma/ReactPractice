var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
  render: function() {
    return   (
              <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <img src={this.props.imageUrl} alt="REDIS"/>
                  <div className="caption">
                    <h3>{this.props.caption}</h3>
                    <p>{this.props.description}</p>
                    <p>
                      <Badge text={this.props.text} count={this.props.count}/>
                    </p>
                  </div>
                </div>
              </div>
    );
  }
});
