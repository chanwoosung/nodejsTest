const express =require('express');
const app=express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose=require('mongoose');
const route=require('./route');
var port=process.env.PORT||7080;
var config=require('./config')
mongoose.Promise=global.Promise;


var db= mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error'));
db.once('open',function callback(){
  console.log("connecting mongod SERVER");
})
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static("public"));
app.set('jwt-secret',config.secret);
app.use('/test',route);
mongoose.connect(config.mongoDBUrl).then(() => app.listen(port,function(){
  console.log("Express is running on Port "+port);
}));
