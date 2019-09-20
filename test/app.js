const express =require('express');
const app=express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose=require('mongoose');
const route=require('./route');
var port=process.env.PORT||7080;
var config=require('./config')
mongoose.Promise=global.Promise;
mongoose.connect(config.mongoDBUrl).then(()=>{
  console.log('connect to DB');
}).catch((err)=>{
  console.log('not connected',err);
});
var db= mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error'));
db.once('open',function(){
  console.log("connecting mongod SERVER");
})
app.use('/test',route)
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('jwt-secret',config.secret);
// app.use('/api',require("./routes/api"));
// app.use('/',require("./routes"));
app.listen(port,function(){
    console.log("Express is running on Port "+port);
});

