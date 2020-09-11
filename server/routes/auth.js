const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const requireLogin = require("../middleware/requireLogin");
const nodemailer = require("nodemailer");
const { request } = require("request");
const { response } = require("express");
var axios = require("axios");

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ error: "Please fill the required fields" });
  }
  User.findOne({ email: email }).then((saveUser) => {
    if (!saveUser) {
      return res.json({ error: "email and passowrd are mis-match" });
    }
    //comparing the password from front-end and the password which stored in our database
    bcrypt
      .compare(password, saveUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: saveUser }, JWT_SECRET);
          const { _id, name, email } = saveUser;
          res.json({
            token,
            user: { _id, name, email },
          });
        } else {
          return res.json({ error: "Invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.post("/contact", (req, res) => {
  console.log("inside contact");
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.json("please fill all the fields");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "muvvalachaitanya05@gmail.com",
      pass: process.env.MAIL_PASS,
    },
  });

  var mail = {
    to: "muvvalachaitanya05@gmail.com",
    subject: "Mail from contact",
    html: `<h3> ${name}  <br/> ${email}  </h3> says:  ${message}`,
  };

  transporter.sendMail(mail, (err, info) => {
    if (err) {
      return res.json({ error: "try again" });
    } else {
      res.send({
        success: true,
        message: "Sent!",
      });
    }
  });
});

router.post("/subscribe", (req, res) => {
  console.log("reached /Subscribe");
  const { name, email } = req.body;

  // Make sure fields are filled
  if (!email || !name) {
    return res.json("filed are missing");
  }

  var data = JSON.stringify({
    email_address: email,
    status: "subscribed",
    merge_fields: { FNAME: name },
  });

  var config = {
    method: "post",
    url: "https://us17.api.mailchimp.com/3.0/lists/0e3d9da2d4/members",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.BASIC_AUTH,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/check", (req, res) => {
  console.log("Backend running......");
});
module.exports = router;
