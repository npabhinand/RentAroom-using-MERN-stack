const express = require("express");
const homeRoutes = express.Router();
const bcrypt = require("bcrypt");
// connecting to the database
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;


homeRoutes.route("/home/boys").get(function (req, res) {
    let db_connect = dbo.getDb("RentARoom");
    db_connect
      .collection("addrooms")
      .find({accomodation_for:{$in:["Boys"]}})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

  
homeRoutes.route("/home/girls").get(function (req, res) {
    let db_connect = dbo.getDb("RentARoom");
    db_connect
      .collection("addrooms")
      .find({accomodation_for:{$in:["Girls"]}})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   module.exports = homeRoutes;