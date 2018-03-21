module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  SERVER_PORT: process.env.SERVER_PORT || 5000,

  STEAM_API_KEY: process.env.STEAM_API_KEY,

  DATABASE_HOST: process.env.POSTGRES_HOST || process.env.DATABASE_HOST,
  DATABASE_NAME: process.env.POSTGRES_DB || process.env.DATABASE_NAME,
  DATABASE_PASSWORD: process.env.POSTGRES_PASSWORD || process.env.DATABASE_PASSWORD,
  DATABASE_USER: process.env.POSTGRES_USER || process.env.DATABASE_USER,
}
