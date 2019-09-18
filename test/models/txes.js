const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const Txes=new Schema({
  _id:String,
  txid:String,
  blockhash:String,
  blockindex:String,
  timestamp:Date,
  total:String,
  vout:{amount:String,addresses:String},
  vin:{amount:String,addresses:String},
  __v:String
})
Txes.findOneByUsername=function(txid){
  return this.findOne({
    txid
  }).exec()
}

module.exports=mongoose.model('Txes',Txes)
