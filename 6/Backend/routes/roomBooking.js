const express = require("express");
 
const addRoute = express.Router();
const bcrypt = require("bcrypt");
// connecting to the database
const dbo = require("../db/conn");
 
const ObjectId = require("mongodb").ObjectId;
 
addRoute.route("/reserve").post(function (req, response, next) {
    console.log("---------recieved");
    const roomid= ObjectId(req.body.roomid);
    const userId = ObjectId(req.body.userid);
    const ownerId = ObjectId(req.body.ownerId);
    console.log(req.body)
   
    
 let db_connect = dbo.getDb("RentARoom");
 result = db_connect.collection("bookings").insertOne({roomid:roomid,userid:userId,ownerId:ownerId,status:"submitted"}, function (err, res) {
  if (err) throw err;
  console.log(err);
  response.json(res);
  
});
let myquery = { _id: roomid };
let newvalues={
  $set:{status:"reserved"}
}
 db_connect
   .collection("addrooms")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     
   });

});

addRoute.route("/view_by_owner").post(async function (req, res) {
  let db_connect = dbo.getDb("RentARoom");
  await db_connect
    .collection("bookings")
    .aggregate([
      {'$match':{ownerId:ObjectId(req.body.ownerId),}},
      {
        "$lookup":{
      from:'addrooms',
      localField:"roomid",//field name of a
      foreignField:"_id",//field name of b
      as:'room'
    }} ,
      {
        "$lookup":{
      from:'users',
      localField:"userid",//fildname of a
      foreignField:"_id",//field name of b
      as:'reserver'
    }} 
      ,
      {'$match':{"room.status":"reserved"}},
  
  
  ])
    // .find({ownerId:req.body.ownerId})
    .toArray(async(err, result) =>{
   console.log(result)
      if (err) throw err;    
      console.log(result);
      console.log(req.body.ownerId);
      res.json(result);
    });
  // await db_connect
  //   .collection("addrooms")
  //   .find({ownerId: req.body.ownerId})
  //   .toArray(function (err, result) {
  //     if (err) throw err;
  //     res.json(result);
  //     console.log(result)
  //   });
 });
  
addRoute.route("/reserve/:action").post(async function (req, res) {
  let db_connect = dbo.getDb("RentARoom");
  const action=req.params.action;
  console.log(req.body)
  const{e_id,bookerid,roomid,ownerid}=req.body
  console.log(e_id,bookerid,roomid,ownerid)
  if(action=="accept"){
    let myquery = { _id: ObjectId(roomid) };
    let newvalues={
      $set:{status:"occupied"}
    }
    db_connect
    .collection("addrooms")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
   
      console.log("1 document updated");
      
    });
 
    db_connect
    .collection("bookings")
    .updateOne({ _id: ObjectId(e_id) }, {
      $set:{status:"accepted"}
    }, function (err, res) {
      if (err) throw err;

      console.log("1 document updated");
      
    });
 


  }
  if(action=="decline"){
    let myquery = { _id: ObjectId(roomid) };
    let newvalues={
      $set:{status:"available"}
    }
    db_connect
    .collection("addrooms")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
       console.log("1 document updated");
      
    });
 
    db_connect
    .collection("bookings")
    .updateOne({ _id: ObjectId(e_id) }, {
      $set:{status:"declined"}
    }, function (err, res) {
      if (err) throw err;

      console.log("1 document updated");
      
    });
 
  }
 });

 addRoute.route("/property").post(function (req, res) {
  let db_connect = dbo.getDb("RentARoom");
  console.log("YES")
  // let myquery = { ownerId: ObjectId(req.params.id) };
  // db_connect
  //   .collection("addrooms")
  //   .find({'$match':{ownerId:ObjectId(req.body.ownerId),}})
  //   .toArray(function (err, result) {
  //     if (err) throw err;
  //     res.json(result);
  //   });
    db_connect
    .collection("addrooms")
    .find({ownerId: req.body.ownerId})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result, "RES")
    });
 });
  

module.exports = addRoute;