const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Address = new Schema({
  _id: String,
  a_id:String,
  balance:String,
  sent:String,
  received:String,
  txs:{
    type:String,
    addresses:String
  },
  __v:String
})
Address.findOneByUsername=function(_id){
  return this.findOne({
    _id
  }).exec()
}
Address.findOneByUsername=function(txid){
  return this.findOne({
    txid
  }).exec()
}
module.exports=mongoose.model('Address',Address)
