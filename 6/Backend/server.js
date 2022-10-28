const express = require("express");

const app = express();
app.use('/uploads', express.static('uploads'));

const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/user"));
app.use(require("./routes/addroom"));
app.use(require("./routes/login"));
app.use(require("./routes/roomBooking"));
app.use(require("./routes/admin"));
app.use(require("./routes/home"));
const dbo = require("./db/conn");



 
app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});