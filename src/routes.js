const {
  saveBooks,
  getAllBooks,
  getDetilBooks,
  editBookByID,
  deleteBookById,
} = require('./handler');

const routes = [{
  method: 'POST',
  path: '/books',
  handler: saveBooks,
},
{
  method: 'GET',
  path: '/books',
  handler: getAllBooks,
},

{
  method: 'GET',
  path: '/books/{id}',
  handler: getDetilBooks,
},
{
  method: 'PUT',
  path: '/books/{id}',
  handler: editBookByID,
},
{
  method: 'DELETE',
  path: '/books/{id}',
  handler: deleteBookById,
},
];

module.exports = routes;
