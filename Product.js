const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Product extends Model{}

Product.init()({
    product_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    product_category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    product_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Products'
});

module.exports = Product;