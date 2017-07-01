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
// router.post('/', function (req, res, next) {
//   res.render('index');
  // knex('person').insert({name: req.body.name}).then(function (person) {
  //   knex.select().table('person').then(function(person) {
  //     res.send(person);
  //   });
  // });
// });

/* GET one person */

module.exports = router;
