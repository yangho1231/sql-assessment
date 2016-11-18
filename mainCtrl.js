var app = require('./index');
var db = app.get('db');
module.exports = {
  GetAllUsers: function(req, res, next) {
    db.get_all_users(function(err, all) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.send(all);
      }
    });
  },
  GetAllVehicles: function(req, res, next) {
    db.get_all_vehicles(function(err, all) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.send(all);
      }
    })
  },
  addUsers: function(req, res, next) {
    db.add_users([req.body.firstName, req.body.lastName, req.body.email], function(err, add) {
      if(err) {
        res.send(err);
      }
      else {
        res.send(add);
      }
    })
  },
  addVehicles: function(req, res, next) {
    db.add_vehicles([req.body.make, req.body.model, req.body.year, req.body.ownerId], function(err, add) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.send(add);
      }
    })
  },
  getVehicleCount: function(req, res, next) {
    db.get_vehicle_count([req.params.userId], function(err, count) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.send(count);
      }
    });
  },
  getVehicle: function(req, res, next) {
    db.get_vehicle([req.params.userId], function(err, get) {
      if(err) {
        res.status(500).send(err);
      }
      else {
        res.send(get);
      }
    });
  },
  getVehicleByEmail: function(req, res, next) {
    if (req.query.email) {
      db.get_email(req.query.email, function(err, email) {
          if (err) {
              res.status(500).send(err);
          } else {
              res.send(email);
          }
      });
  }

    else {
        var firstLetter = req.query.userFirstStart + '%';
        db.get_firstletter(firstLetter, function(err, letter) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(letter);
            }
        });

      }
    },
    newYear: function(req, res, next) {
      db.get_newer(function(err, newer) {
        if(err) {
          res.status(500).send(err);
        }
        else {
          res.send(newer);
        }

      });

    }
} ;
