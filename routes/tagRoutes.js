var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET all tags */
router.get('/', function(req, res, next) {
  knex.select().table('tag').then(function(tags) {
    res.send(tags);
  });
});

/* ADD one tag */
router.post('/', function (req, res, next) {
  knex('tag').insert({name: req.body.name}).then(function (tags) {
    knex.select().table('tag').then(function(tags) {
      res.send(tags);
    });
  });
});

/* EDIT one tag */


/* DELETE tag */

/* GET one tag */
router.get('/:tag_id', function(req, res, next) {
  knex('tag').where('id', req.params.tag_id).then(function(tags) {
    res.send(tags);
  });
});

module.exports = router;
