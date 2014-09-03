var server = require("./server");
var fs = require ("fs");
var TMR = require("./tmrForm");

function page(request, response)
{
   console.log('Request handler "page" was started.');
   server.genericCallback(request, response, TMR.TMR.tmrRender);
}

function bromineWrite(request, response)
{
   console.log('Request handler "bromineWrite" was started.');
}

function bromineRead(request, response)
{
   console.log('Request handler "bromineRead" was started.');
}

function readerdump(request, response)
{
   console.log('Request handler "readerdump" was started.');
   fs.readFile('readerdump', 'utf8', function(error, data)
      {
         if (error)
            console.log(error);
            else
            {
               response.writeHead(200, {"Content-Type": "text/plain"});
               response.write(data);
               response.end();
            }
      });
}
exports.page = page;
exports.bromineWrite = bromineWrite;
exports.bromineRead = bromineRead;
exports.readerdump = readerdump;
