const express = require("express");
 
const addRoute = express.Router();
const bcrypt = require("bcrypt");
// connecting to the database
const dbo = require("../db/conn");
 
const ObjectId = require("mongodb").ObjectId;
 
addRoute.route("/addinmate").post(function (req, res, next) {
    console.log("---------recieved");
    const roomid= req.body.roomid;
    const userid = req.body.userid;
    console.log(roomid)
    console.log(userid)
    var ress = res;
 let db_connect = dbo.getDb("RentARoom");

 ///

 let myquery = { _id: ObjectId(roomid) };
 let newvalues = {
   $push: {
    inmates: userid
   },
 };
 db_connect
   .collection("addrooms")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     
   });

 ///

//  try {
//     console.log('trying')
//     db_connect
//    .collection("users")
//    .findOneAndupdateOne({ _id: roomid },
//     { $push: { 'inmates': userid } },
//   );
//  }catch(e) {
//     console.log('failed')
//     console.log(e)
//  }
});
 

module.exports = addRoute;