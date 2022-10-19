const { Timestamp } = require('mongodb');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const Joi=require('joi');
const passwordComplexity=require("joi-password-complexity")
const Schema=mongoose.Schema;

const RegisterSchema=new Schema(
    {
        email:{type:String,required:true},
        name:{type:String,required:true},
        phone:{type:Number,required:true},
        usertype:{type:String,required:true},
        password:{type:String,required:true}
    },{
    Timestamp:String, default: Date.now()}
)

RegisterSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:'7d'});
    return token;
}

const Register=mongoose.model("Register",RegisterSchema);

const validate=(data)=>{
    const Schema=Joi.object({
        email:Joi.String().required().label("email"),
        name:Joi.String().required().label('name'),
        phone:Joi.Number().required().label('phone'),
        usertype:Joi.String().required().label('usertype'),
        password:Joi.String().required().label('password')
    });
    return schema.validate();
}

module.exports={Register,validate};