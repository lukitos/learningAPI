var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

let learning_all = new Promise((resolve, reject) => {

  let sql_str = 'select ';
  sql_str += 'l.id, l.name as title, l.description, '
  sql_str += 'p.fname, p.mname, p.lname, p.email, p.phone, p.twitter, p.linkedin, p.github ';
  sql_str += 'from learning l, person p ';
  sql_str += 'where l.author_id = p.id';

  // let learning_results = [];
  let promises_arr = [];
  knex.raw(sql_str).then((learning) => {
    learning.rows.forEach((learn) => {
      let sql_arr = [];
      sql_arr.push(knex.raw('select t.* from tag t, learning_tag lt where t.id = lt.tag_id and lt.learning_id = ' + learn.id));
      sql_arr.push(knex.raw('select a.* from asset a, learning_asset la where a.id = la.asset_id and la.learning_id = ' + learn.id));
      Promise.all(sql_arr).then((results) => {
        learn.tags = results[0].rows;
        learn.assets = results[1].rows;
        promises_arr.push(Promise.resolve(learn.tags));
        // learning_results.push(learn);
        // console.log('learning_results=', learning_results);
        console.log('learn for ', learn.id, learn);
      });
    });
    // Promise.all(promises_arr).then(learning_results => {
    //   console.log('promises_arr=', promises_arr);
    //   resolve(learning_results);
    // });
    // console.log('learning_results=', learning_results);
    // resolve(learning_results);
  });

});

learning_all.then((msg) => {
  console.log('msg=', msg);
  router.get('/', (req, res, next) => {
    res.send('learning page');
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
