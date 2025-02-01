const express = require('express');
const app = express();

app.set('view engine' , 'ejs');

app.use(express.static('public'));

app.get('/' , function(req , res){

  res.render("index");

});

app.listen(8080 , function(){
    console.log('Your app is ready and listening on port 8080');
  });

module.exports = app;