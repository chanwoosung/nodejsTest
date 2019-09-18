const router=require("express").Router();
const auth=require("./auth");
const address=require("./../models/address.js");
const authMiddelware=require("./../../middleWare");
router.use('/auth',auth);
router.use('/address',authMiddelware);
router.use('/address',address);
module.exports=router;
