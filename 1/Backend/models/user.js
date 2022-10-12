const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
        email:{type:String,required:true},
        // name:{type:String,required:true},
        // phone:{type:Number,required:true},
        // place:{type:String,required:true},
        password:{type:String,required:true},
        // usertype:{type:String,required:true},
        // gender:{type:String,required:true}
    }
);

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
        email:Joi.String().required().label("email"),
        // name:Joi.String().required().label('name'),
        // phone:Joi.Number().required().label('phone'),
        // place:Joi.String().required().label('place'),
        password:passwordComplexity().required().label('password'),
        // gender:Joi.String().required().label('sex'),
        // usertype:Joi.String().required().label('usertype'),
    });
	return schema.validate(data);
};

module.exports = { User, validate };