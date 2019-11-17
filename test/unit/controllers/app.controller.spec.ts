import { Test, TestingModule } from '@nestjs/testing';
import { ThingController } from '../../../src/controllers/thing.controller';
import { ThingService } from '../../../src/services/thing.service';

describe('ThingController', () => {
  let thingController: ThingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ThingController],
      providers: [ThingService],
    }).compile();

    thingController = app.get<ThingController>(ThingController);
  });

  describe('get', () => {
    it('should return []', () => {
      expect(thingController.getAll()).toBe([]);
    });
  });
});
