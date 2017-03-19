var React = require('react');
var ThumbnailList = require('./thumbnailList');


console.log("---------------------------------------");
var options = {
  thumbnailList: [
    {
      caption: "Redis",
      description: "Redis is an open source (BSD licensed), in-memory data structure store, used as database, cache and message broker.",
      imageUrl: "http://redis.io/images/redis-white.png",
      count: 40,
      text:"hey hello"
    },
    {
      caption: "Redis",
      description: "Redis is an open source (BSD licensed), in-memory data structure store, used as database, cache and message broker.",
      imageUrl: "http://redis.io/images/redis-white.png",
      count:56,
      text:"am ok"
    }
  ]
}
var thumbnailEle = React.createElement(ThumbnailList, options);
React.render(thumbnailEle, document.querySelector('.container'));
