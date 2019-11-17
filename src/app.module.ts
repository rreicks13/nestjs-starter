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


const Repositories: Provider<any>[] = [
  {provide: ThingRepository, useFactory: () => (new BaseRepository<Thing>(Thing))}
]

const Mappers: Provider<any>[] = [
  {provide: ThingMapper, useFactory: () => (new BaseMapper<ApiThing, Thing>())}
]

@Module({
  imports: [],
  controllers: [ThingController],
  providers: ([ThingService] as Provider<any>[]).concat(Repositories).concat(Mappers),
})
export class AppModule {}

