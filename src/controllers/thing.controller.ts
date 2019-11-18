import { Controller, Get } from '@nestjs/common';
import { ThingService } from '../services/thing.service';
import { BaseController } from './base.controller';
import { ApiThing } from 'src/models/api-thing.model';
import { Thing } from 'src/data/models/thing.model';
import { ThingMapper } from 'src/mappers/Thing.mapper';

@Controller("api/things")
export class ThingController extends BaseController<ApiThing, Thing> {
  constructor(service: ThingService, mapper: ThingMapper) {
    super(service, mapper);
  }
}
