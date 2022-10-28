const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/RentARoom',{
    useNewUrlparser:true,
    useUnifiedtopology:true
}).then(() =>console.log("connected to db")).catch(console.error);

}




