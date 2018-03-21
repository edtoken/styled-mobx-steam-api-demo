const request = require('request');
const qs = require('qs');
const config = require('../config')

const DEFAULT_API_PARAMS = {
  key: config.STEAM_API_KEY,
  format: 'json'
}

class Api {

  static _call(type, url, params = {}) {

    params = Object.assign({}, DEFAULT_API_PARAMS, params)

    switch (type) {
      case 'get':
      case 'del':
        url += '?' + qs.stringify(params)
        params = {}
        break
    }

    return new Promise((resolve, reject) => {

      request[type](url, params, (err, response, body) => {
        if (err) {
          return reject(err)
        }

        try {

          const json = JSON.parse(body)

          if (json.response) {
            return resolve(json.response)
          }

          return reject(response)

        } catch (e) {
          reject(e)
        }

        return reject(response)
      })
    })
  }

  static get(path, params) {
    return Api._call('get', path, params)
  }

  static post(path, params) {
    return Api._call('post', path, params)
  }

  static put(path, params) {
    return Api._call('put', path, params)
  }

  static del(path, params) {
    return Api._call('delete', path, params)
  }
}

class SteamPoweredApi {

  static getUserSteamIdByUrl(vanityurl) {
    return Api.get(`${SteamPoweredApi.apiUrl}/ISteamUser/ResolveVanityURL/v0001/`, {vanityurl})
  }

  static GetOwnedGames(steamid) {
    return Api.get(`${SteamPoweredApi.apiUrl}/IPlayerService/GetOwnedGames/v0001/`, {steamid})
  }
}

SteamPoweredApi.apiUrl = "http://api.steampowered.com";

class SteamSpyApi {


}

SteamSpyApi.apiUrl = "http://steamspy.com/api.php";

class SteamUser {
  constructor(steamId, vanityUrl) {
    this.steamId = steamId;
    this.vanityUrl = vanityUrl;
  }

  getOwnedGames() {
    return new Promise((resolve, reject) => {
      SteamPoweredApi.GetOwnedGames(this.steamId).then(resp => {
        console.log('RESP GAMES', resp)
      }).catch(err => {
        reject(err)
      })
    })
  }

  static fromUrl(vanityUrl) {
    return new Promise((resolve, reject) => {
      SteamPoweredApi.getUserSteamIdByUrl(vanityUrl).then(resp => {

        const steamId = resp.steamid

        resolve(new SteamUser(steamId, vanityUrl))
      }).catch(err => {
        reject(err)
      })
    })
  }
}

module.exports.SteamUser = SteamUser