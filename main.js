const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./mongo/post');


app.set('view engine' , 'ejs');

app.use(express.static('public'));

if(process.env.DB_HOST) {
    mongoose.connect(process.env.DB_HOST);
  
    app.get('/posts', async function(req, res) {
      try {
        const posts = await Post.find({});
        res.render('posts', { posts: posts });
      } catch (err) {
        console.error(err);
        return res.status(500).send(err);
      }
    });
  }

app.get('/' , function(req , res){

  res.render('index');

});

app.get('/test' , function(req , res){

    res.render('test');
  
  });

app.listen(8080 , function(){
    console.log('Your app is ready and listening on port 8080');
});

module.exports = app;