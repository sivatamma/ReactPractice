var $ = require('jquery');

exports.saveMaskingSettings = function(data, cb) {
  //var url = fireflyAPI.serverHostUrl + '/company/' + fireflyAPI.token + "/maskSettings";
  var url = "http://localhost:8000/company/572ed76515daf75dfc3f3326/maskSettings";
  $.ajax({
    url: url,
    data: data.masking,
    contentType: 'application/json; charset=utf-8',
    type: 'POST',
    beforeSend: function (xhr) {
      xhr.setRequestHeader ("Authorization", "Basic " + btoa(data.email + ":" + data.password));
    },
    success: function(data, status) {
      cb(null, data);
    },
    error: function(jqXHR, status, error) {
      console.log(jqXHR);
      cb(jqXHR);
    }
  });
}

// exports.dashboardAuthService = function(data, cb) {
//   //var url = fireflyAPI.serverHostUrl + '/company/' + fireflyAPI.token + "/dashboardAuthentication";
//   var url = "http://localhost:8000/company/572ed76515daf75dfc3f3326/dashboardAuthentication";
//   $.ajax({
//     url: url,
//     data: JSON.stringify(data),
//     contentType: 'application/json; charset=utf-8',
//     type: 'POST',
//     success: function(data, status) {
//       cb(null, data);
//     },
//     error: function(jqXHR, status, error) {
//       console.log(jqXHR);
//       console.log(error);
//       cb(jqXHR);
//     }
//   });
// }
