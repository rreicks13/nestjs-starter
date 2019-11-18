import { dbcontext } from "../dbcontext";
import { Injectable, BadGatewayException } from '@nestjs/common';
import { IDbModel, tableNameMetadataKey } from "../models/db.model";

export interface IRepository<IModel extends IDbModel> {
    getAll(): Promise<IModel[]>;
    get(id: number): Promise<IModel>;
    add(model: IModel): Promise<void>;
    delete(id: number): Promise<void>;
    update(id: number, updatedModel: IModel): Promise<void>;
}

@Injectable()
export class BaseRepository<IModel extends IDbModel> implements IRepository<IModel> {
    protected tableName: string;

    constructor(args: new () => IModel) {
        if (!Reflect.hasMetadata(tableNameMetadataKey, args))
        {
            throw "Invalid setup: Cannot create a repository for a model that does not have a table name attribute";
        }
        this.tableName = Reflect.getMetadata(tableNameMetadataKey, args);
    }

    async getAll(): Promise<IModel[]> {
        return await dbcontext<IModel>(this.tableName) as IModel[];
    }

    async get(id: number): Promise<IModel> {
        return await dbcontext<IModel>(this.tableName).where("id", id).first() as IModel;
    }

    async add(model: IModel): Promise<void> {
        await dbcontext.insert(model).into(this.tableName);
    }

    async delete(id: number): Promise<void> {
        await dbcontext(this.tableName).where("id", id).del();
    }

    async update(id: number, updatedModel: IModel): Promise<void> {
        await dbcontext(this.tableName).where("id", id).update(updatedModel);
    }
}
