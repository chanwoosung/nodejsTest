const mongoose=require('mongoose');
const express=require('express');
const router=require("express").Router();
const DBModel=require('./models/addresses');
const controller=require('./routes/controller');
const middleware=require('./middleWare/auth');
// router.get('/all',(req,res)=>{

// });

router.get('/test',(req,res)=>{

    res.send('hello')
})
//router.get('/',middleware);
router.get('/search',controller.list);
router.get('/api/:id',controller.show);
router.get('/find/:id',controller.find);
router.post('/makeBlock',controller.makeBlock);
router.put('/changeBlock',controller.changeBlock);
router.delete('/deleteBlock/:id',controller.deleteBlock);
router.post('/',(req,res,next)=>{
    res.render('index',{
        title:"Main Page",
        introduce:"Welcome"
    })
    next()
});



module.exports=router;

