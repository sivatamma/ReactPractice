var express =require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var recordList = [{
                sessionId: "983-456-789",
                recordingDate: "19-03-2016",
                totalTime: "5 min",
                share:"/zxywq32423423",
                tag:"my last recording"
              },
              {
                sessionId: "123-456-789",
                recordingDate: "12-03-2016",
                totalTime: "2 min",
                share:"/awer32423423",
                tag:"first recording"
              },
            {
              sessionId: "231-456-789",
              recordingDate: "12-01-2016",
              totalTime: "20 min",
              share:"/asw342423423",
              tag:"second recording"
            },
            {
              sessionId: "671-123-780",
              recordingDate: "12-02-2016",
              totalTime: "1 min",
              share:"/asdf32428903",
              tag:"third recording"
            },
            {
              sessionId: "453-456-999",
              recordingDate: "23-02-2016",
              totalTime: "6 min",
              share:"/asdf32423123",
              tag:"last recording"
            }];
var idGenerator = 100;
app.route('/recordingList')
  .get(function(req, res){
    console.log("inside get request");
    recordList = recordList.map(function(item){
      if(!item.id) {
        item.id = idGenerator++;
      }
      return item;
    });
    console.log(recordList);
    res.json(recordList);
  });
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
