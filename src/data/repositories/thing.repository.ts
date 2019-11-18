import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./base.repository";
import { Thing } from "../models/thing.model";
import { dbcontext } from "../dbcontext";

export class ThingRepository extends BaseRepository<Thing> {
    constructor() {
        super(Thing);
        dbcontext.schema.hasTable(this.tableName).then(exists => {
            if(!exists) {
                dbcontext.schema.createTable(this.tableName, (table) => {
                    table.increments('id').primary();
                    table.string('name', 100);
                });
            }
        })
    }
}