const mongoose=require('mongoose');
const DBModel1=require('../models/addresses')
const DBModel2=require('../models/txes')
const jwt=require('jsonwebtoken');
var crypto=require('crypto');
var test=mongoose.model('test');
var txetxid=mongoose.model('txes');
var bcrypt=require('bcrypt-nodejs');
const config=require('../config')


exports.list=(req,res)=>{
  txetxid.find({},(err,lists)=>{
    if(err){res.json(err);
    }else{res.render('list',{
      title:'list',
      lists:lists
    })
  }
  });
 
}
exports.show=(req,res,next)=>{
  var param=req.params.id;
  const Txidtokenize=crypto.createHmac('sha256',config.secret).update(param).digest('base64').replace('/','').replace('=','');
  txetxid.find({txid:Txidtokenize},(err,lists)=>{
    if(err){res.json({error:err});
    }else{
      res.json(lists);
    };
  });
 
}
exports.find= (req,res,next) => {
  var param=req.params.id;
  txetxid.find({'vout.addresses':param},(err,lists)=>{
    if(err){res.json({error:err});
    }else{
      res.json(lists);
    };
  });
}
exports.makeBlock=(req,res,next)=>{
  var moment=require('moment');
  var nowtime=moment().format('MMDDHHMMSS');
  var user=req.body.id;
  var block=req.body.block;
  console.log(req.body.block);
  const Txidtokenize=crypto.createHmac('sha256',config.secret).update(user).digest('base64').replace('/','').replace('=','');
  const createBlocktokenize=crypto.createHmac('sha256',config.secret).update(block).digest('base64').replace('/','').replace('=','');
  console.log(Txidtokenize);
  console.log(createBlocktokenize);
  var saveData=new DBModel2({txid:Txidtokenize,blockhash:createBlocktokenize,timestamp:nowtime});
  saveData.save((err)=>{
    if(err){
      res.send(err);
      return;
    }
    next()
    res.send(err);
  })
}
exports.changeBlock=(req,res,next)=>{
  var moment=require('moment');
  var nowtime=moment().format('MMDDHHMMSS');
  var user=req.body.id;
  var block=req.body.block;
  console.log(req.body.block);
  const Txidtokenize=crypto.createHmac('sha256',config.secret).update(user).digest('base64').replace('/','').replace('=','');
  const createBlocktokenize=crypto.createHmac('sha256',config.secret).update(block).digest('base64').replace('/','').replace('=','');
  console.log(Txidtokenize);
  console.log(createBlocktokenize);
  txetxid.update({txid:Txidtokenize}, {blockhash:createBlocktokenize,timestamp:nowtime}, function(err, output){
    if(err) res.status(500).json({ error: 'database failure' });
    console.log(output);
    if(!output.n) return res.status(404).json({ error: 'book not found' });
    res.json( { message: 'book updated' } );
})
  
}
exports.deleteBlock=(req,res)=>{
  var user=req.params.id;
  console.log(user);
  const Txidtokenize=crypto.createHmac('sha256',config.secret).update(user).digest('base64').replace('/','').replace('=','');
  console.log(Txidtokenize);
  txetxid.findOneAndDelete({txid:Txidtokenize},(err,res)=>{
    if(err){
      return res.json({
        error:err
      })
    }
  })
}