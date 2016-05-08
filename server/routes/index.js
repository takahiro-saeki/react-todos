var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    data: [{
      title: 'index data1'
    },
    {
      title: 'index data2'
    },
    {
      title: 'index data3'
    }]
  });
});

module.exports = router;
