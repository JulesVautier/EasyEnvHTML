var express = require('express');
var port = process.env.PORT || 3001;
var app = express();

app.use(express.static(__dirname + '/development/html/'));

app.listen(port, function(){
    console.log('Express server listening on port ' + port);
});



