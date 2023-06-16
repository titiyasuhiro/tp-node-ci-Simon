const { Sequelize, DataTypes } = require('sequelize');

//Créez une instance de Sequelize et spécifiez les informations de connexion
const sequelize = new Sequelize('testdb', 'testuser', 'testpw', {
  host: 'postgres',
  port: 5432,
  dialect: 'postgres'
});


console.log('Hello');

//je rajoute une fonction
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 9));

function add(a, b) {
  return (a + b);
}

console.log(add(4, 2));

export default { multiply, add };
