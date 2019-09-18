const router=require("express").Router();
const auth=require("./controller");
const authMiddelware=require("./../../middleWare");
router.use('/auth',auth);
router.use('/search',authMiddelware);
router.use('/search',address);
module.exports=router;
