const express = require("express").Router();
const { Register, validate } = require("../models/reg.models");
const bcrypt = require("bcrypt");

Router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const reg = await Register.findOne({ email: req.body.email });
    if (reg)
      return res
        .status(409)
        .send({ message: "User with this email already exists" });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashpassword = await bcrypt.hash(req.body.password, salt);
    await new Register({ ...req.body, password: hashpassword }).save();
    return res.status(210).send({ message: "account created successfully" });
  } catch (error) {
    res.status(500).send({ message: "internal server Error" });
  }
});

module.exports = register;
