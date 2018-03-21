module.exports = () => {

  const db = require('../models')

  const prepareVanityUrl = (url) => {
    return url.split('/').pop().trim()
  }

  return async (fastify, opts) => {

    fastify.get('/ping', async (request, reply) => {
      return `/api/user pong`
    })

    fastify.post('/', (request, reply) => {
      const vanityUrl = prepareVanityUrl(request.body.url)

      db.user.findOne({
        where: {vanityUrl: vanityUrl},
        attributes: ['steamId', 'vanityUrl', 'updated']
      }).then(async user => {

        if (!user) {
          user = await db.user.register(vanityUrl)
        }

        const games = await user.getOwnedGames()
        console.log('GAMES', games)

        reply.send({steamId: user.steamId, vanityUrl: user.vanityUrl})
      })
    })
  }
}