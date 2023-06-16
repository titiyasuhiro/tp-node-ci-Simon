const { Sequelize } = require('sequelize');
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

export default multiply;