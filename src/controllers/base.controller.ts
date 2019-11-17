import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IService } from 'src/services/base.service';
import { IMapper } from 'src/mappers/base.mapper';

@Controller()
export abstract class BaseController<IAPIModel, IModel> {
  constructor(private readonly service: IService<IModel>, private readonly mapper: IMapper<IAPIModel, IModel>) {}

  @Get()
  getAll(): Promise<IModel[]> {
    return this.service.getAll();
  }

  @Get(":id")
  async get(@Param('id') id: number): Promise<IAPIModel> {
    return this.mapper.ToApiModel(await this.service.get(id));
  }

  @Post()
  add(@Body() model: IModel): Promise<void> {
    return this.service.add(model);
  }

  @Delete(":id")
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }

  @Put(":id")
  update(@Param('id') id: number, @Body() model: IModel): Promise<void> {
    return this.service.update(id, model);
  }
}
