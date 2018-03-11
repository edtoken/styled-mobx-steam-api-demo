const config = require("./config");
const cors = require('cors')

module.exports = (fastify, db) => {

  fastify.use(cors())

  fastify.get("/", function (request, reply) {
    reply.send(new Date().toUTCString());
  });

  fastify.get("/ping", function (request, reply) {
    reply.send("pong");
  });

  fastify.register(require('./api/users')(fastify, db), {prefix: '/api/user'})

  fastify.listen(config.SERVER_PORT, "0.0.0.0", function (err) {
    if (err) {
      throw err;
    }
    console.log(`server listening on ${fastify.server.address().port}`);
  });

}