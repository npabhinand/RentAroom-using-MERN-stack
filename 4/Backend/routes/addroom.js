const express = require("express");
const multer = require("multer");

// uuid is used to generate unique id
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      uuidv4() + "-" + Date.now() + "-" + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

 
const addRoomRoutes = express.Router();
 
// connecting to the database
const dbo = require("../db/conn");
 
const ObjectId = require("mongodb").ObjectId;


 
 
// To get a list of all the addrooms.
addRoomRoutes.route("/addroom").get(function (req, res) {
 let db_connect = dbo.getDb("RentARoom");
 db_connect
   .collection("addrooms")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// To get a single addRoom by id
addRoomRoutes.route("/addroom/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("addrooms")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
   
// creating a new addRoom.
addRoomRoutes.route("/addroom/add").post(upload.array('file', 12),function (req, response) {
 let db_connect = dbo.getDb();
//  console.log("UPLOAD FILES:: ",req.files);
let filenames = [];
    req.files.forEach(function (fileObj) {
      var fname = fileObj.filename;
      filenames.push(fname);
    });
 let myobj = {
   property_name: req.body.property_name,
   types: req.body.types,
   rate: parseInt(req.body.rate),
   accomodation_for: req.body.accomodation_for,
   total_inmates: parseInt(req.body.total_inmates),
   phone: parseInt(req.body.phone),
   description: req.body.description,
   furniture: req.body.furniture, 
   ownerId: req.body.ownerId,
   bathroom_type: req.body.bathroom_type,
   status: "available",
   image: filenames,
 }
//  console.log("file[0] : ",req.body.file[0]);
 result = db_connect.collection("addrooms").insertOne(myobj, function (err, res) {
   if (err) throw err;
   console.log(err);
   response.json(res);
   console.log(result)
 });
});
 
// updating a addRoom by id.
addRoomRoutes.route("/addroom/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 console.log(req.params.id)
 let myquery = { _id: ObjectId(req.params.id) };
 console.log(req.body)
 let newvalues = {
   $set: {
   property_name:req.body.property_name,
   types: req.body.types,
   rate: req.body.rate,
   accomodation_for: req.body.accomodation_for,
   total_inmates: req.body.total_inmates,
   phone: req.body.phone,
   description: req.body.description,
   
   bathroom_type: req.body.bathroom_type,
   furniture: req.body.furniture,
   },
 };

console.log(newvalues)




 db_connect
   .collection("addrooms")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// deleting a addRoom

// addRoomRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("addrooms").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });
 


module.exports = addRoomRoutes;
