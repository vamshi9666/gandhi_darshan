
const express= require('express'),
	 path = require('path');
const app =express();


app.use(express.static('./dist/gandhiDarshan'));

app.get('/*', (req,res)=>{

  res.sendFile(path.join(__dirname,'/dist/gandhiDarshan/index.html'));

});
//
sai charans comment
//
app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
})
