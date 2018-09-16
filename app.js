/** node js intery**/

var express= require('express');
var app=express();
app.get('/ser1',function(req,res,next){
    res.send('server 1');
});
app.get('/ser2',function(req,res,next){
    res.send('server 2');
});
app.listen(8080,function(){
    console.log('server started at port 8080');
});