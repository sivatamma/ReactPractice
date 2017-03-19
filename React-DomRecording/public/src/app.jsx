var React = require('react');
var ReactDOM = require('react-dom');
var RecordingList = require('./recordingList');


var headerTitle = "DOM Recording List";

var allowedFields = {
  sessionId :{
    name: 'Session Id'
  },
  recordingDate: {
    name: 'Recording Date'
  },
  totalTime: {
    name: 'Total Time'
  },
  share: {
    name: 'Share'
  },
  tag: {
    name: 'Tag Name'
  }
};
var ele = React.createElement(RecordingList, {allowedFields:allowedFields});
ReactDOM.render(ele, document.querySelector('.domRecording'));
