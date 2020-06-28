module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false,            
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        complement: {
            type: Sequelize.STRING,            
            allowNull: true,
        },
        city: {
          type: Sequelize.STRING,          
          allowNull: false,
        },
        state: {
          type: Sequelize.STRING(2),          
          allowNull: false,
        },
        zip_code: {
          type: Sequelize.INTEGER(8),          
          allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    });
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('recipients');
  },
};
