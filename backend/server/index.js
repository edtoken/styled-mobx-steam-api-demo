const cluster = require("cluster");
const fastify = require("fastify")();
const db = require('./models');

console.log(`isMaster ${cluster.isMaster}, PID ${process.pid}`);

db.sequelize.sync();


if (cluster.isMaster) {
  cluster.fork();

  console.log(`Master pid ${process.pid} started`);
  require("./server")(fastify)
}

if (!cluster.isMaster) {
  console.log(`Worker pid ${process.pid} started`);
  require("./worker")(fastify)
}