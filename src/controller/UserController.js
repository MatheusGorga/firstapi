let users = require("../mocks/users");

module.exports = {
  listUsers(request, response) {
    const { statusCode, body } = response;
    const { order } = request.query;
    const sortedUsers = users.sort((a, b) => {
      if (order === "desc") {
        return a.id < b.id ? 1 : -1;
      }
      return a.id > b.id ? 1 : -1;
    });

    response.send(200, sortedUsers);
  },

  getUserById(request, response) {
    const { id } = request.params;
    const user = users.filter((user) => user.id === Number(id));

    if (!user) {
      return response.send(400, { error: 'User Not Found' });
    }

    response.send(200, user);
  },

  createUser(request, response){
    const {body} = request;
    const lasUserId = users[users.length - 1 ].id;

    const newUser = {
      id: lasUserId +1,
      name: body.name,
    }

    users.push(newUser)

    response.send(200, newUser);
  },

  updateUser(request, response){
    let { id } = request.params;
    let {name} = request.body;
    id = Number(id)

    const useExists = users.find((user) => user.id === id)

    if(!useExists){
      return response.send(400, { error: 'User Not Found' });
    }

    users = users.map((user) => {
      if(user.id === id){
        return {
          ...user,
          name,
        };
      }
      return user
    })

    response.send(200, {id, name})
  },


  deleteUserById(request, response){
    let { id } = request.params;
    id = Number(id)
    const user = users.filter((user) => user.id === id);

    if (!user) {
      return response.send(400, { error: 'User Not Found' });
    }

    users = users.filter((user) =>  {return user.id !== id} )

    response.send(200, users);
  },
};
