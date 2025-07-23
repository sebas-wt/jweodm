import env from '#start/env'
import { defineConfig } from 'adonis-odm'

const odmConfig = defineConfig({
  connection: 'mongodb',

  connections: {
    mongodb: {
      client: 'mongodb',
      connection: {
        // Option 1: Use a full URI
        url: env.get('MONGO_URI'),

        // Option 2: Use individual components (if url is not provided)
        host: env.get('MONGO_HOST', 'localhost'),
        port: env.get('MONGO_PORT', 27017),
        database: env.get('MONGO_DATABASE'),
        username: env.get('MONGO_USERNAME'),
        password: env.get('MONGO_PASSWORD'),

        // MongoDB connection options
        options: {
          maxPoolSize: env.get('MONGO_MAX_POOL_SIZE', 10),
          minPoolSize: env.get('MONGO_MIN_POOL_SIZE', 0),
          maxIdleTimeMS: env.get('MONGO_MAX_IDLE_TIME_MS', 30000),
          serverSelectionTimeoutMS: env.get('MONGO_SERVER_SELECTION_TIMEOUT_MS', 5000),
          socketTimeoutMS: env.get('MONGO_SOCKET_TIMEOUT_MS', 0),
          connectTimeoutMS: env.get('MONGO_CONNECT_TIMEOUT_MS', 10000),
        },
      },
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Seeders Configuration
  |--------------------------------------------------------------------------
  |
  | Configure the database seeders for your application. Seeders are used
  | to populate your database with initial or test data.
  |
  */
  seeders: {
    paths: ['./database/seeders'],
    defaultConnection: 'mongodb',
  },
})

export default odmConfig