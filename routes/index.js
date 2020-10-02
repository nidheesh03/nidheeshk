var express = require('express');
var router = express.Router();
let fs=require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
  //render me always file name.
});

router.get('/project',function(req, res){
  res.render('project');
})

router.get('/about',function(req, res){
  res.render('about');
}
)
router.get('/contact',function(req, res){
  res.render('contact');
}
)

router.post('/submit',function(req,res){
  name=req.body.name;
  email=req.body.email;
  subject=req.body.subject;
  area=req.body.area;
  data=[name," "+email," "+subject," "+area];

  fs.appendFile('list.txt',`${data}\n`,function(){})
  // res.send(req.body);
  //res.send(req.body) we use this when want the data. its used when the method of the form is POST.Post is more secure method.
  //res.send(res.query) we use this when we want data. its used when the method of the form is GET. Get is not secure as the data is shown in url.
  res.render('success');
})

module.exports = router;

//router.get('/:username',function(){}){
  //res.send(req.params.username);
//}
