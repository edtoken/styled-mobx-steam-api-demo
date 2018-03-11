const Sequelize = require('sequelize');

module.exports = db => {

  const App = db.define('App', {
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updated: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    appId: {
      unique: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    }
  });

  App.helper = {}

  return App
}