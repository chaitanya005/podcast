const formidable = require("formidable");
// const fs = require("fs");
const _ = require("lodash");
const Ama = require("../models/ama");

exports.amaByName = (req, res, next, routename) => {
  Ama.findOne({ routename }).exec((err, ama) => {
    if (err || !ama) {
      return res.status(404).json({
        error: "AMA not found",
      });
    }

    req.ama = ama;
    next();
  });
};

exports.read = (req, res) => {
  return res.json(req.ama);
};

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();

  form.parse(req, (err, fields) => {
    let ama = new Ama(fields);

    ama.save((err, result) => {
      if (err) {
        return res.json(err);
      }
      res.json(result);
    });
  });
};
