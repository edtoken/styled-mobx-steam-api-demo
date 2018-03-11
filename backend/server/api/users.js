module.exports = function (fastify, db) {

  const User = require('../models/User')(db)

  return function (fastify, opts) {
    fastify.post("/add", function (request, reply) {
      const userName = User.prepareUserName(request.body.name)

      if (!userName) {
        reply.code(500)
        reply.send('Invalid user name')
        return
      }

      console.log('User', User)

      reply.send(userName);
    });
  }
}