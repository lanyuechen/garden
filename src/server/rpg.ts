import { RpgServer, RpgServerEngine } from '@rpgjs/server';
import { Player } from './player';
import { SampleMap } from './maps/samplemap';
import { MapZ } from './maps/mapz';
import database from './database';

@RpgServer({
  basePath: __dirname,
  maps: [SampleMap, MapZ],
  database,
  playerClass: Player,
})
export default class RPG extends RpgServerEngine {
  onStatus(nb) {
    console.log(`${nb} players connected`);
  }
}
