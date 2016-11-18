var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
//Need to enter username and password for your database
var connString = "postgres://postgres:password1@localhost/assessbox";

var app = module.exports = express();
var massive = massive.connectSync({connectionString : connString});
app.use(bodyParser.json());
app.use(cors());

//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.

app.set('db', massive);
var db = app.get('db');
var mainCtrl = require('./mainCtrl.js');

    // db.user_create_seed(function(err ,test){
    //   console.log("User Table Init");
    // });
    // db.vehicle_create_seed(function(){
    //   console.log("Vehicle Table Init")
    // });
app.get('/api/users', mainCtrl.GetAllUsers);
app.get('/api/vehicles', mainCtrl.GetAllVehicles);
app.post('/api/users', mainCtrl.addUsers);
app.post('/api/vehicles', mainCtrl.addVehicles);
app.get('/api/user/:userId/vehiclecount', mainCtrl.getVehicleCount);
app.get('/api/user/:userId/vehicle', mainCtrl.getVehicle);
app.get('/api/vehicle', mainCtrl.getVehicleByEmail);
app.get('/api/newervehiclesbyyear', mainCtrl.newYear);
app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})

module.exports = app;
