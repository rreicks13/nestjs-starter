import { Thing } from 'src/data/models/thing.model';
import { ApiThing } from 'src/models/api-thing.model';

automapper.createMap(typeof(Thing), typeof(ApiThing)).convertToType(ApiThing);
automapper.createMap(typeof(ApiThing), typeof(Thing)).convertToType(Thing);