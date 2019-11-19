import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./base.repository";
import { Thing } from "../models/thing.model";
import { DbContext } from "../dbcontext";

export class ThingRepository extends BaseRepository<Thing> {
    constructor(dbContext: DbContext) {
        super(dbContext, Thing);
        this.dbcontext.knex.schema.hasTable(this.tableName).then(exists => {
            if(!exists) {
                this.dbcontext.knex.schema.createTable(this.tableName, (table) => {
                    table.increments('id').primary();
                    table.string('name', 100);
                }).then(() => {

                })
            }
        })
    }
}