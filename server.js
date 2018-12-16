const app = require('express')(),
      port = process.env.PORT || 3000,
      webroutes = require('./routes/content'),
      adminroutes = require('./routes/admin'),
      hbs = require('hbs');
//routes middleware
app.use(webroutes);
app.use('/admin', adminroutes);

//app.use('view engine', 'hbs');
app.listen(port, () => {
  console.log('locally listenning');
});
