const express = require("express");
const addEnquiry = express.Router();
 
// connecting to the database
const dbo = require("../db/conn");
 
const ObjectId = require("mongodb").ObjectId;


 
 
// To get a list of all the enquiries.
addEnquiry.route("/enquiry").get(function (req, res) {
 let db_connect = dbo.getDb("RentARoom");
 db_connect
   .collection("enquiries")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// To get a single enquiry by id
addEnquiry.route("/enquiry/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("enquiries")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
enquiry
// creating a new addRoom.
addEnquiry.route("/enquiry/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   room_id: req.body.room_id,
   user_id: req.body.user_id,
   
 }
//  console.log("file[0] : ",req.body.file[0]);
 result = db_connect.collection("enquiries").insertOne(myobj, function (err, res) {
   if (err) throw err;
   console.log(err);
   response.json(res);
   console.log(result)
 });
});
 
// updating a addRoom by id.
addEnquiry.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
    room_id: req.body.room_id,
    user_id: req.body.user_id,

   },
 };
 db_connect
   .collection("enquiries")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// deleting a addRoom
addEnquiry.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("enquiries").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 


module.exports = addEnquiry;
