module.exports = function registerApis(fastify) {

  const routes = {
    '/api/user': require('./user')
  }

  for (let prefix in routes) {
    fastify.register(routes[prefix](), {prefix: prefix})
  }
}