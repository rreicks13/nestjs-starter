import { Injectable } from '@nestjs/common';
import { IRepository } from 'src/data/repositories/base.repository';
import { DbModel } from 'src/data/models/db.model';

export interface IService<IModel> {
    getAll(): Promise<IModel[]>;
    get(id: number): Promise<IModel>;
    add(model: IModel): Promise<void>;
    delete(id: number): Promise<void>;
    update(id: number, updatedModel: IModel): Promise<void>;
}

@Injectable()
export class BaseService<IModel extends DbModel> implements IService<IModel> {
    
    constructor(private repo: IRepository<IModel>) {}

    getAll(): Promise<IModel[]> {
        return this.repo.getAll();
    }    
    get(id: number): Promise<IModel> {
        return this.repo.get(id);
    }
    add(model: IModel): Promise<void> {
        return this.repo.add(model);
    }
    delete(id: number): Promise<void> {
        return this.repo.delete(id);
    }
    update(id: number, updatedModel: IModel): Promise<void> {
        return this.repo.update(id, updatedModel);
    }
}
