import { Injectable } from "@nestjs/common";

export interface IMapper<ApiModel, DbModel> {
    ToApiModel(dbModel: DbModel): ApiModel;
}

@Injectable()
export class BaseMapper<ApiModel, DbModel> implements IMapper<ApiModel, DbModel> {
    ToApiModel(dbModel: DbModel): ApiModel {
        throw new Error("Method not implemented.");
    }
}