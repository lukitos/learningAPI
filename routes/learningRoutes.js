var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var all_learning = [];

/* GET all learning */
router.get('/', function(req, res, next) {

  let sql_str = 'select ';
	sql_str += 'l.id, l.name as title, l.description, '
	sql_str += 'p.fname, p.mname, p.lname, p.email, p.phone, p.twitter, p.linkedin, p.github ';
  sql_str += 'from learning l, person p ';
  sql_str += 'where l.author_id = p.id';

  knex.raw(sql_str).then(function (learning) {

    learning.rows.forEach(function (learn) {

      // Clone current learn row
      all_learning.push(learn);

      // Get tags and add it to the clone
      sql_str = 'select t.* ';
      sql_str += 'from tag t, learning_tag lt ';
      sql_str += 'where t.id = lt.tag_id ';
      sql_str += 'and lt.learning_id = ' + learn.id;
      knex.raw(sql_str).then(function (tags) {
        all_learning.tags = tags.rows;
        console.log('processing tags for id=', learn.id);
        // console.log('in get tags all_learning=', all_learning);
      });

      // Get assets and add it to the clone
      sql_str = 'select a.* ';
      sql_str += 'from asset a, learning_asset la ';
      sql_str += 'where a.id = la.asset_id ';
      sql_str += 'and la.learning_id = ' + learn.id;
      knex.raw(sql_str).then(function (assets) {
        all_learning.assets = assets.rows;
        console.log('processing assets for id=', learn.id);
        // console.log('in get assets all_learning=', all_learning);
      });

    });

    console.log('printing all_learning');
    res.send(all_learning);

  });

});

// /* GET all learning */
// router.get('/', function(req, res, next) {
//   let sql_str = 'select ';
// 	sql_str += 'l.name as title, l.description, '
// 	sql_str += 'p.fname, p.mname, p.lname, p.email, p.phone, p.twitter, p.linkedin, p.github ';
//   sql_str += 'from learning l, person p ';
//   sql_str += 'where l.author_id = p.id';
//   knex.raw(sql_str).then(function (learning) {
//     res.send(learning.rows);
//   });
// });
//
// /* GET all assets for one learning */
// router.get('/tags/:lid', function(req, res, next) {
//   let sql_str = 'select t.name as tag_name ';
//   sql_str += 'from tag t, learning_tag lt ';
//   sql_str += 'where t.id = lt.tag_id ';
//   sql_str += 'and lt.learning_id = ' + req.params.lid;
//   knex.raw(sql_str).then(function (tags) {
//     res.send(tags.rows);
//   });
// });
//
// /* GET all tags for one learning */
// router.get('/assets/:lid', function(req, res, next) {
//   let sql_str = 'select a.name as asset_name, a.description, a.type, a.img_url, a.src_url ';
//   sql_str += 'from asset a, learning_asset la ';
//   sql_str += 'where a.id = la.asset_id ';
//   sql_str += 'and la.learning_id = ' + req.params.lid;
//   knex.raw(sql_str).then(function (assets) {
//     res.send(assets.rows);
//   });
// });

module.exports = router;
