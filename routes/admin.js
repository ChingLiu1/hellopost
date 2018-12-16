const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send("welcome to admin route");
});
module.exports = router;
