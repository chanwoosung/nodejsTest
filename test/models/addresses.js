const mongoose=require('mongoose');
 const Schema=mongoose.Schema;
const test=new Schema({
  title:String,author:String
});

module.exports=mongoose.model('test',test);

// module.exports.Schema=function(modelName){
//   console.log(Address);
//   return{model:mongoose.model(modelName)};
// }