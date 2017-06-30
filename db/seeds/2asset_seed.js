
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('asset').del()
    .then(function () {
      // Inserts seed entries
      return knex('asset').insert([
        {name: 'Eloquent JavaScript', type: 'book', img_url: 'http://eloquentjavascript.net/img/cover.png', src_url: 'http://eloquentjavascript.net/'},
        {name: 'JavaScript for Kids', type: 'book', img_url: 'https://www.nostarch.com/sites/default/files/styles/uc_product/public/jsfk_cover-front_final.png?itok=qoIMiU8r', src_url: 'https://www.nostarch.com/javascriptforkids'},
        {name: 'Introduction to JavaScript', type: 'video', img_url: 'https://image.flaticon.com/icons/png/512/124/124015.png', src_url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET'}
      ]);
    });
};
