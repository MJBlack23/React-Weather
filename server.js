const express = require('express');

// create the App
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Express server is up on port 3000');
})
