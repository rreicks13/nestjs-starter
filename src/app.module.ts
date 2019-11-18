import { Module, Provider } from '@nestjs/common';
import { ThingController } from './controllers/thing.controller';
import { ThingService } from './services/thing.service';
import { ThingRepository } from './data/repositories/thing.repository';
import { BaseRepository } from './data/repositories/base.repository';
import { Thing } from './data/models/thing.model';
import { ThingMapper } from './mappers/Thing.mapper';
import { BaseMapper } from './mappers/base.mapper';
import { ApiThing } from './models/api-thing.model';
import "automapper-ts/dist/automapper";
import { ConfigService } from './config/config.service';


const Repositories: Provider<any>[] = [
  {provide: ThingRepository, useFactory: () => (new ThingRepository())}
]

const Mappers: Provider<any>[] = [
  {provide: ThingMapper, useFactory: () => (new BaseMapper<ApiThing, Thing>())}
]

const Services: Provider<any>[] = [
  ThingService,
  {
    provide: ConfigService,
    useValue: new ConfigService(`${process.env.NODE_ENV || 'development'}.env`),
  }
]

@Module({
  imports: [],
  controllers: [ThingController],
  providers: Services.concat(Repositories).concat(Mappers),
})
export class AppModule {}

