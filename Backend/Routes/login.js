const express = require("express");
 
const loginRoute = express.Router();
const bcrypt = require("bcrypt");
// connecting to the database
const dbo = require("../db/conn");
 
const ObjectId = require("mongodb").ObjectId;
 
 
// To get a list of all the users.
loginRoute.route("/login").post(function (req, res, next) {
    console.log("recieved");
    const usertype= req.body.usertype;
    const email = req.body.email;
    const password = req.body.password;
    var passwordMatch = false;
    var ress = res;
 let db_connect = dbo.getDb("RentARoom");
 db_connect
   .collection("users")
   .find({email: email})
   .toArray(function (err, result) {
      // console.log(result);
      bcrypt.compare(password, result[0].password, function(err, res){
            console.log("--------------"+ result[0].usertype);
         if (res){
            passwordMatch = true;
            if (passwordMatch && result[0].usertype=='student')
            {
               ress.send({type: 'student', _id:result[0]._id});
            }
            else if(passwordMatch && result[0].usertype=='house owner')
            {
               ress.send({type: 'owner', _id:result[0]._id});
            } else {
               ress.send({type: 'none'});

            }
         }
      });
     if (err) {
      window.alert("login failed")
     };
     
   });
});
 

module.exports = loginRoute;