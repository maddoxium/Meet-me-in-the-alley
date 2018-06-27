module.exports = function (sequelize, DataTypes) {
    var Products = sequelize.define("Products", {
        Product_ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Product_NAme: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        Category: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        Picture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        Price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },

        Buyer_ID: {
            type: DataTYpes.INTEGER,

        },

        Seller_ID: {
            type: DataTypes.INTEGER,
        },

        createdAT: Sequelize.DATE,
        updatedAT: Sequelize.DATE
    });
    return Products;
};