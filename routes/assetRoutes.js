var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET all asset */
router.get('/', function(req, res, next) {
  knex.select().table('asset').then(function(asset) {
    res.send(asset);
  });
});

module.exports = router;
