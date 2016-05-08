var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    data: [{
      title: 'server data1'
    },
    {
      title: 'server data2'
    },
    {
      title: 'server data3'
    }]
  });
});

module.exports = router;
