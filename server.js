const express   = require('express');
const app       = express();
const PORT      = 2000;

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('============================');
  console.log('Listening to port: ', PORT)
  console.log('============================');

})
