const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./mongo/post');
const db = require('./config/db.config');
const seedDB = require('./mongo/seed')
require("dotenv").config();


const PORT = process.env.NODE_DOCKER_PORT || 8080;

seedDB();

app.set('view engine' , 'ejs');

app.use(express.static('public'));



app.get('/posts', async function(req, res) {
  try {
    const posts = await Post.find({});
    res.render('posts', { posts: posts });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
});

app.get('/' , function(req , res){

  res.render('index');

});

app.get('/test' , function(req , res){

    res.render('test');
  
  });

app.listen(PORT , function(){
    console.log(`Your app is ready and listening on port ${PORT}`);
});

module.exports = app;