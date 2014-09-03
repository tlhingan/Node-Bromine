var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.page;
handle["/bromineWrite"] = requestHandlers.bromineWrite;
handle["/bromineRead"] = requestHandlers.bromineRead;
handle["/readerdump"] = requestHandlers.readerdump;
server.httpListener(router.route, handle);
