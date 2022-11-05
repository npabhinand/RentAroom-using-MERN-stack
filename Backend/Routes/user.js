const express = require("express");
 
const userRoutes = express.Router();
const bcrypt = require("bcrypt");

// connecting to the database
const dbo = require("../db/conn");
 
const ObjectId = require("mongodb").ObjectId;
 
 
// To get a list of all the users.
userRoutes.route("/user").get(function (req, res) {
 let db_connect = dbo.getDb("RentARoom");
 db_connect
   .collection("users")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// To get a single user by id
userRoutes.route("/user/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("users")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
}); 
 
// creating a new user.
userRoutes.route("/user/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 bcrypt.hash(req.body.password, 10, async function(err, hash){
  let myobj = {
    usertype:req.body.usertype,
    email: req.body.email,
    password:hash,
    name: req.body.name,
    phone: req.body.phone,
    gender: req.body.gender, 
    place: req.body.place,
  };
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
 })
});
 
// updating a user by id.
userRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
    usertype:req.body.usertype,
    email: req.body.email,
    password:req.body.password,
    name: req.body.name,
    phone: req.body.phone,
    gender: req.body.gender,
    place: req.body.place,
   },
 };
 db_connect
   .collection("users")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// deleting a user
userRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("users").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = userRoutes;