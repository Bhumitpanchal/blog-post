const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  Post.findAll()
    .then((result) => {
      res.status(200).json({ message: "Successfully fetch posts", result });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.createPost = (req, res, next) => {
  const { title, imageURL, author, content } = req.body.postData;
  Post.create({
    title,
    imageURL,
    author,
    content,
  })
    .then((result) => {
      res.status(201).json({ message: "post successfully created" }, result);
    })
    .catch((error) => {
      console.log(error);
    });
};
