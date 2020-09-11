const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { create, amaByName, read } = require("../controller/ama");

const Ama = require("../models/ama");

router.post("/create/ama/:userId", create);
router.param("routeName", amaByName);
router.get("/:routeName", read);

module.exports = router;
