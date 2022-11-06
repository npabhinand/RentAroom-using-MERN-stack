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
   
    var ress = response;
 let db_connect = dbo.getDb("RentARoom");
 result = db_connect.collection("bookings").insertOne({roomid:roomid,userid:userId,ownerId:ownerId}, function (err, res) {
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
      {'$match':{ownerId:ObjectId(req.body.ownerId)}},


      {
        "$lookup":{
      from:'addrooms',
      localField:"roomid",//fildname of a
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
      
  
  
  ])
    // .find({ownerId:req.body.ownerId})
    .toArray(async(err, result) =>{
      console.log(result)
      if (err) throw err;
    
 
      
      res.json(result);
    });
 });
  

module.exports = addRoute;