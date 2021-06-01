const { default: axios } = require("axios");

const functions = {
    add: (num1, num2) => num1 + num2,
    null: () => null,
    createUser: () => {
        let user = {};
        user.first_name = "Abuzar";
        user.last_name = "Mirza";
        return user;
    },
    fetchUser: async () => {
       return await axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data).catch(err => 'error')
    }
}


module.exports = functions