const express = require('express');

// create the App
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (Object.keys(req.headers).indexOf('x-forward-proto') > 0) {
    if (req.headers['x-forwarded-proto'] === 'https') {
      res.redirect('http://' + req.hostname + req.url);
    }
  }
   next();
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
})
