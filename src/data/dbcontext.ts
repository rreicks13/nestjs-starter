import * as knex from 'knex';
import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import Knex = require('knex');

@Injectable()
export class DbContext {
  public knex: Knex<any, unknown[]>;

  constructor(config: ConfigService) {
    this.knex = knex({
      client: 'pg',
      connection: {
        host: config.get('DATABASE_HOST'),
        port: Number(config.get('DATABASE_PORT')),
        database: config.get('DATABASE_NAME'),
        user: config.get('DATABASE_USER'),
        password: config.get('DATABASE_PASSWORD')
      }
    });
  }
}