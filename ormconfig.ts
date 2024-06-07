module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3307,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'db_user_task',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [
      'dist/migration/**/*{.ts,.js}'
    ],
    subscribers: [
      'dist/subscriber/**/*{.ts,.js}'
    ],
    cli: {
      entitiesDir: 'src',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber'
    }
};