export interface IDbModel {
    id: number;
}

// @TableName("DbModel")
// need to have a @TableName selector
export abstract class DbModel implements IDbModel {
    id: number;
}

export const tableNameMetadataKey = Symbol("tableName");

export function TableName(value: string) {
    return (target) => {
        Reflect.defineMetadata(tableNameMetadataKey, value, target);
    };
}