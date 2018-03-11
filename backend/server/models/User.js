const Sequelize = require('sequelize');

module.exports = db => {

  const User = db.define('user', {
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updated: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    steamId: {
      unique: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    vanityUrl: {
      unique: true,
      type: Sequelize.STRING(100)
    }
  });

  User.helper = {}
  User.helper.prepareUserName = (name) => {
    return name.split('/').pop().trim()
  }

  return User
}