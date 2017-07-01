var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET all learning */
router.get('/', function(req, res, next) {
  knex.select().table('learning').then(function(learning) {
    res.send(learning);
  });
});

module.exports = router;
