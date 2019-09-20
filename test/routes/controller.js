const mongoose=require('mongoose');
const DBModel=require('../models/addresses')
const address=mongoose.model('test')

module.exports.list=function(req,res){
  address.find({},(err,addressList)=>{
    var query=address.find({});
    query.exec(function(err,addressList){
      if(err){console.log('error has been occurred');}
      else{
        // res.render('index',{list:addressList});
        //res.render('list',{list:addressList});
        res.json(addressList);
        console.log('good');
      }
    })
  });
}
exports.show=function(req,res){
  DBModel.findById({title:req}),(err,addressList)=>{
    if(err){
      console.log('error has been occurred');
    }else{
      res.json({
        title:String,
        author:String
      });
      console.log('well done');
    }
  }

}



// exports.findAll= (req,res,next)=>{
//   address.find({},(err,addressList)=>{
//     var query=addr.find({});
//     query.exec(function(err,addr){
//       if(err){console.log('error has been occurred');}
//       else{
//         res.render('index',{list:addressList});
//         console.log('good');
//       }
//     })
//      res.render('list',{list:addressList});
//   });
//  };
