const jwt=require("jsonwebtoken");
const addr=require("./../../../models/addresses");
exports.search=(req,res)=>{
    res.json({
        success:true,
        info:req.decoded
    })
}
exports.searchall=(req,res)=>{
    const {_id}=req.body
    const check=(addr)=>{
      if(!addr){
        throw new Error("account doesn't exists.");
      }else{
        if(addr.verify(_id)){
          const p =new Promise((resolve,reject)=>{

          })
        }
      }
    }
}
