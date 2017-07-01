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
  knex('tag').insert({name: req.body.name}).then(function () {
    knex.select().table('tag').then(function(tags) {
      res.send(tags);
    });
  });
});

/* GET one tag */
router.get('/:tid', function(req, res, next) {
  knex('tag').where('id', req.params.tid).then(function(tags) {
    res.send(tags);
  });
});

/* EDIT one tag */
router.put('/:tid', function (req, res, next) {
  knex('tag').where('id', req.params.tid)
    .update({name: req.body.name})
    .then(function () {
      knex.select().table('tag').then(function(tags) {
      res.send(tags);
    });
  });
});

/* DELETE tag */
router.delete('/:tid', function (req, res, next) {
  knex('tag').where('id', req.params.tid).del().then(function () {
    knex.select().table('tag').then(function(tags) {
      res.send(tags);
    });
  });
});

module.exports = router;
