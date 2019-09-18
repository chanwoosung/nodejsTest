const express =require('express');
const app=express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose=require('mongoose');
var port=process.env.PORT||7080;
mongoose.connect("mongodb://localhost/test");
var db= mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
  console.log("connecting mongod SERVER");
})

app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('jwt-secret','secret');
app.use('/api',require("./routes/api"));
app.listen(port,function(){
    console.log("Express is running on Port "+port);
});

var router=require('./routes/main')(app);
