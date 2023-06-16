import { Sequelize, DataTypes } from 'sequelize';
// //Créez une instance de Sequelize et spécifiez les informations de connexion
const sequelize = new Sequelize('testdb', 'testuser', 'testpw', {
  host: 'postgres',
  port: 5432,
  dialect: 'postgres'
});

const Product = sequelize.define('products', {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  underscored: true,
});

async function connectdb() {
  try {
    await sequelize.authenticate();
    console.log('Connexion OK');
  } catch (error) {
    console.error('FAIL Connexion:', error);
  }
}

connectdb();

async function getAllProducts(req, res, next) {
  try {
    const products = await Product.findAll();
    const productsJSON = products.map(product => product.toJSON());
    console.log('Products (JSON):', productsJSON);
  } catch (err) {
    console.log('Error:', err);
    next(err);
  }
}

getAllProducts();

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

export { multiply , add };
