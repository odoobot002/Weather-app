var express = require('express');
var router = express.Router();
var axios= require('axios')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: '' });
});
//b1457916453e05b468330c85d519fbf9
router.get('/submit',function(req,res){
  const city = req.query.city
  const url_api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b1457916453e05b468330c85d519fbf9`
axios.get(url_api)
.then(function (response)  {
  res.render('index',{data:response.data})
  //res .send(response.data)

})
.catch(function (error) {
  res.send(error)
})
});
module.exports = router;
