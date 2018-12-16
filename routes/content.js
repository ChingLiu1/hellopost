const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('content');
});
module.exports = router;
