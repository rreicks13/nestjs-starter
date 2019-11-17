import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from './base.service';
import { Thing } from 'src/data/models/thing.model';
import { ThingRepository } from 'src/data/repositories/thing.repository';
import { BaseRepository } from 'src/data/repositories/base.repository';

@Injectable()
export class ThingService extends BaseService<Thing> {
  constructor(repo: ThingRepository) {
    super(repo);
  }
}
