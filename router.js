function route(path, handle, response)
{
   console.log('Routing request for ' + path + '.');
   if (typeof handle[path] === 'function')
      handle[path](path, response);
      else console.log('No request handler for ' + path + '.');
}

exports.route = route;
