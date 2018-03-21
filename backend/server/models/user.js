'use strict';

const Sequelize = require('sequelize');
const SteamUser = require('../services/SteamApi').SteamUser

module.exports = function (sequelize, DataTypes) {

  const User = sequelize.define('user', {
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
      type: Sequelize.STRING(100)
    },
    vanityUrl: {
      unique: true,
      type: Sequelize.STRING(100)
    }
  });

  User.register = async name => {
    const user = await SteamUser.fromUrl(name)

    return await User.create({
      steamId: user.steamId,
      vanityUrl: user.vanityUrl
    })
  }

  User.prototype.getOwnedGames = async function () {
    const user = new SteamUser(this.steamId)
    const games = await user.getOwnedGames()
  }


  return User
};