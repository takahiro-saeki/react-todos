var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    users: [
      {
        id: 1,
        name: "foo"
      },
      {
        id: 2,
        name: "bar"
      },
      {
        id: 12212,
        name: "aaa"
      },
      {
        id: 666,
        name: "gazette"
      }
    ]
  });
});

module.exports = router;
