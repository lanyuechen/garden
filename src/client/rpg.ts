import { RpgClient, RpgClientEngine } from '@rpgjs/client';
import gui from './gui';
import { SceneMap } from './map';
import { Sprite } from './sprite';
import { MedievalTilesets } from './maps/medieval';
import Characters from './characters';
import { Images } from './images';
import { Animations } from './animations';
import { Sounds } from './sounds';

@RpgClient({
  spritesheets: [
    MedievalTilesets,
    ...Characters,
    Images,
    Animations
  ],
  sounds: [
    Sounds
  ],
  gui,
  spriteClass: Sprite,
  scenes: {
    map: SceneMap
  }
})
export default class RPG extends RpgClientEngine {
  
}
