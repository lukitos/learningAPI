var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET all person */
router.get('/', function(req, res, next) {
  knex.select().table('person').then(function(person) {
    res.send(person);
  });
});

/* ADD one person */
router.post('/', function (req, res, next) {
  knex('person')
  .insert({
      lname: req.body.lname,
      fname: req.body.fname,
      mname: req.body.mname,
      email: req.body.email,
      phone: req.body.phone,
      twitter: req.body.twitter,
      linkedin: req.body.linkedin,
      github: req.body.github
    })
  .then(function () {
    knex.select().table('person').then(function(person) {
      res.send(person);
    });
  });
});

/* GET one person */
router.get('/:pid', function (req, res, next) {
  knex('person').where('id', req.params.pid).then(function (person) {
    res.send(person);
  });
});

/* EDIT one person */
router.put('/:pid', function (req, res, next) {
  knex('person')
    .where('id', req.params.pid)
    .update({
      lname: req.body.lname,
      fname: req.body.fname,
      mname: req.body.mname,
      email: req.body.email,
      phone: req.body.phone,
      twitter: req.body.twitter,
      linkedin: req.body.linkedin,
      github: req.body.github
      })
    .then(function () {
      knex.select().table('person').then(function(person) {
        res.send(person);
      });
    });
});

/* DELETE one person */
router.delete('/:pid', function (req, res, next) {
  knex('person').where('id', req.params.pid).del().then(function () {
    knex.select().table('person').then(function(person) {
      res.send(person);
    });
  });
});

module.exports = router;
