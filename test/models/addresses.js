const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const test=new Schema({
  title:'String',author:'String'
},{
  collection:'test'
});

 const TestMOdel=mongoose.model('test',test);
module.exports=TestMOdel;
