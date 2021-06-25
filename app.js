const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/', (req, res) =>{
  res.render('index.html');
})

app.post('/',(req,res)=>{
	res.send('Hello from post request..');
})
app.listen(3000, () =>{
  console.log('Server running on port 3000')
})
