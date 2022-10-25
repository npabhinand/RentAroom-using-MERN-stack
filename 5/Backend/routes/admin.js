const express = require("express");
const adminRoutes = express.Router();
const bcrypt = require("bcrypt");
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

//to show details of students
adminRoutes.route("/admin/student").post(function (req, res) {
    let db_connect = dbo.getDb("RentARoom");
    db_connect
      .collection("users")
      .find({usertype:{$in:["student"]}})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });
   
 //to show details of owners
   adminRoutes.route("/admin/owner").post(function (req, res) {
    let db_connect = dbo.getDb("RentARoom");
    db_connect
      .collection("users")
      .find({usertype:{$in:["house owner"]}})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });
   

//to show details of houses
   adminRoutes.route("/admin/room").post(function (req, res) {
    let db_connect = dbo.getDb("RentARoom");
    db_connect
      .collection("addrooms")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });


   

    //to find total number of students
   adminRoutes.route("/admin/total_student").post(function (req, res) {
    let db_connect = dbo.getDb("RentARoom");
    db_connect
      .collection("users")
      .find({usertype:{$in:["student"]}})
      .count(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   
   //to find total owners
   adminRoutes.route("/admin/total_owner").post(function (req, res) {
    let db_connect = dbo.getDb("RentARoom");
    db_connect
      .collection("users")
      .find({usertype:{$in:["house owner"]}})
      .count(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   //to find total properties
   adminRoutes.route("/admin/total_properties").post(function (req, res) {
    let db_connect = dbo.getDb("RentARoom");
    db_connect
      .collection("addrooms")
      .find({})
      .count(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });

   module.exports = adminRoutes;