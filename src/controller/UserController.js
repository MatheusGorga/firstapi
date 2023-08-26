const users = require('../mocks/users')

module.exports = {
    listUsers(request, response){
        const {order} = request.query;
        const sortedUsers = users.sort((a, b) => {
            if(order === 'desc'){
                return a.id < b.id ? 1 : -1
            } 
                return a.id > b.id ? 1 : -1
        })
        response.writeHead(200,{'Content-type' : 'application/json' });
        response.end(JSON.stringify(users));
    },

    getUserById(request, response){
        const { id } = request.params;

        console.log(id)

        const user = users.filter(user => user.id === Number(id))

        if(!user){
            response.writeHead(400,{'Content-type' : 'application/json' });
            response.end(JSON.stringify({error : "não encontrado"}));
        }else {
            response.writeHead(200,{'Content-type' : 'application/json' });
            response.end(JSON.stringify({id}));
        }
    },
}