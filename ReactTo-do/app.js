var express =require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var todoList = [{
                  name: "design the concept",
                  startDate: "",
                  endDate: "",
                  completed: true
                },{
                  name: "write algorithm steps",
                  startDate: "",
                  endDate: "",
                  completed: false
                },{
                  name: "implement the code",
                  startDate: "",
                  endDate: "",
                  completed: false
              }];
var idGenerator = 100;

app.route('/todo')
  .get(function(req, res){
    todoList = todoList.map(function(item){
      if(!item.id) {
        item.id = idGenerator++;
      }
      return item;
    });
    res.json(todoList);
  })
  .post(function(req, res){
    todoList = todoList.map(function(item){
      if(item && !item.id) {
        item.id = idGenerator++;
      }
      return item;
    });
    var todoItem = req.body;
    todoItem.id = idGenerator++;
    todoList.push(todoItem);
    res.json(todoList);
  })
  .put(function(req, res){
    res.send('put request');
  });
  app.delete('/todo/:id', function(req,res){
    todoList = todoList.filter(function(item) {
      if(item.id != req.params.id){
        return item;
      }
    });
    console.log(todoList);
    res.end();
  });
  app.put('/todo/:id', function(req, res){
    var reqData = req.body;
    var todoItem = todoList.filter(function(item){
      if(item.id == req.params.id) {
        if(req.body.completed !== undefined) {
          item.completed = req.body.completed;
        }
        req.body.name ? (item.name = req.body.name) : '';
        return item;
      }
    });
    res.send('done');
  })
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
