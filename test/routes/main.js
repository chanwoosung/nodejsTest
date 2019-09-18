module.exports=(app)=>{
  app.get('/',(req,res){
    res.render('index',{
      title:"Test HomePage",
      length:5
    })
  });
}
