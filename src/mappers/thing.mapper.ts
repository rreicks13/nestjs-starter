import { Injectable } from "@nestjs/common";
import { ApiThing } from "src/models/api-thing.model";
import { BaseMapper } from "./base.mapper";
import { Thing } from "src/data/models/thing.model";

@Injectable()
export class ThingMapper extends BaseMapper<ApiThing, Thing> {

}
