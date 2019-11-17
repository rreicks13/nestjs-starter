import * as knex from 'knex';
export const dbcontext = knex({
  client: 'pg',
  connection: {
    host: "localhost",
    port: 5432,
    database: "NestStarter",
    user: "postgres",
    password: "password"
  }
});