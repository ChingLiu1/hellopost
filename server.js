const express = require('express'),
      port = process.env.PORT || 3000,
      app = express(),
      contentRoute = require('./routes/content');
      adminroutes = require('./routes/admin');

//routes middleware
app.use(contentRoute);
app.use('/admin', adminroutes);
app.set('view engine', 'hbs');
app.use(express.static('public'));


app.listen(port, () => {
  console.log('locally listenning');
});
