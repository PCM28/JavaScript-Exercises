const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
// Lo que necesitamos son los nombres
const usersNames = users.map(function(user) {return user.name});
console.log(usersNames);