var path = require('path');
var Datastore = require('nedb');



var db = new Datastore({
  filename : getUserDataPath() + '/data.db',
  autoload: true
});

function getUserDataPath() {

    
    return path.dirname(process.execPath);
}
