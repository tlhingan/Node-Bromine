var http = require("http");
var url = require("url");
var $ = require("jquery");
var querystring = require("querystring");

function genericCallback(data1, data2, callback)
{
   return callback(data1, data2);
}

function httpListener(route, handle)
{
   function onRequest(request, response)
   {
      var getRequest = url.parse(request.url).pathname;
      route(getRequest, handle, response);
   }
   http.createServer(onRequest).listen(8888);
   console.log("Server is running, listenning on port '8888'");
}

exports.httpListener = httpListener;
exports.genericCallback = genericCallback;
