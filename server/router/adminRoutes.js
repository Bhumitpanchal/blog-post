const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.get("/", adminController.getPosts); // get all posts

router.post("/create-post", adminController.createPost); //make post

module.exports = router;
