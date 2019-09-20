const router=require("express").Router();
const DBModel=require('./models/addresses');
const controller=require('./routes/controller');
const middleware=require('./middleWare/auth');
// router.get('/all',(req,res)=>{

// });
router.get('/test',(req,res)=>{
    res.send('hello')
})
router.get('/',middleware);
router.get('/search',controller.list);
router.get('/api',controller.show);
router.get('/',(req,res,next)=>{
    res.render('index',{
        title:"Main Page",
        introduce:"Welcome"
    })
    next()
});


module.exports=router;
