var express = require('express');
var app = express();
app.get('/Get.html', function (req, res) {
    res.sendFile(__dirname + "/" + "Get.html");
});
app.get('', function (req, res) {
    response = {
        Fname: req.query.first_name,
        Lname: req.query.last_name,
        
        Email: req.query.email,
        Phone : req.query.phone,
        DOB: req.query.dob,
        Gender: req.query.gender
    };
    res.end(JSON.stringify(response));
    console.log(response)
});

var server = app.listen(8888, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});