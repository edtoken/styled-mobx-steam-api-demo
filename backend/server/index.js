require('babel-register')({
  presets: ['env']
})

const config = require('./config')

const cluster = require("cluster");
const fastify = require("fastify")();
const Sequelize = require('sequelize');

const db = new Sequelize(
  config.DATABASE_NAME,
  config.DATABASE_USER,
  config.DATABASE_PASSWORD,
  {
    host: config.DATABASE_HOST,
    dialect: 'postgres'
  }
);

console.log(`isMaster ${cluster.isMaster}, PID ${process.pid}`);

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    // if (cluster.isMaster) {
    //   cluster.fork();
    //
    //   console.log(`Master pid ${process.pid} started`);
    //   require("./server")(fastify, db)
    // }
    //
    // if (!cluster.isMaster) {
    //   console.log(`Worker pid ${process.pid} started`);
    //   require("./worker")(fastify, db)
    // }
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(0)
  });
