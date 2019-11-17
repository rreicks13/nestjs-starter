import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./base.repository";
import { Thing } from "../models/thing.model";

export class ThingRepository extends BaseRepository<Thing> {
    constructor() {
        super(Thing)
    }
}