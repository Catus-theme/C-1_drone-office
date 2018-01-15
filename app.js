// require
const express = require('express');
const app = express();
// app.set 설정
app.engine('pug', require('pug').__express);
app.set('port', 3000);
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

// app.use 사용자설정
app.use('/public', express.static('public'));

// Paging 
app.get('/', (req , res) => {
  res.render('index');
})

// Serve Start
app.listen(app.get('port') , (req , res) => {
  console.log(`start serve port ${app.get('port')}`);
})