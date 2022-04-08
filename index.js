const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  res.send('hello Anik or ov')
})

app.listen(3000, () => console.log('listenting to port 3000'));