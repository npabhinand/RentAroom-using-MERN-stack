const router=require('express').Router();
const Joi = require('joi');
const {User}=require('../models/reg.models');

router.post('/',async(req,res)=>{
    try{
        const{error}=validate(req.body);
        if(error)
            return res.status(400).send({message:error.details[0].message});
        const user=await User.findOne({email:req.body.email});
        if(!user)
            return res.status(401).send({message:"inavlid username or password"})
        const validpassword=await bcrypt.compare(req.body.password,user.password)
        if(!password)
            return res.status(401).send({message:"inavlid password"})
        const token=user.generateAuthToken();
            res.status(200).send({message:'user logined successfully'})
    }
    catch(error){
        res.status(500).send({data:token,message:'Inernal server Error'})
    }
})
const validate=(data)=>{
    const Schema=Joi.object({
        email:Joi.String().required().label("email"),
        password:Joi.String().required().label("password")

    });
    return Schema.validate(data)
}

module.exports=router;