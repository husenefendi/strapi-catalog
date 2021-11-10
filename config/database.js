module.exports = ({ env }) => {
  const mode = process.env.NODE_ENV
  const ssl = mode === 'development' ? env.bool('DATABASE_SSL', false) : { rejectUnauthorized: false }
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'postgres',
          host: env('DATABASE_HOST', '127.0.0.1'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapi-ecommerce'),
          username: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'password'),
          ssl
          // ssl: env.bool('DATABASE_SSL', false),
          // ssl: {
          //   rejectUnauthorized: false
          // }
        },
        options: {}
      },
    },
  }
};
