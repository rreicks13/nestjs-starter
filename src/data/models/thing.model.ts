import { DbModel, TableName } from "./db.model";

@TableName("things")
export class Thing extends DbModel {
    name: string;
} 