module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Buyer", {
    First_Name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Last_Name: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    Address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    City: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["A - Z"]
      }
    },

    State: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        is: ["A - Z"],
        len: [2]
      }
    },

    Zip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInt: true
      }
    },

    Phone: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        is: [0 - 9]
      }
    },

    Email: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        isEmail: true
      }
    }
  });

  Post.associate = function(models) {
    // Product
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Buyer, {});
  };

  return Post;
};
