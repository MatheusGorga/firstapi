const UserController = require("./controller/UserController");

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/produtos',
    method: 'GET',
    handler: UserController.listUsers,
  },
];
