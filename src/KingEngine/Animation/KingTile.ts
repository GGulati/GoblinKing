import * as Pixi from 'pixi.js';

export enum KingTileType {
  Grass = "base_out_atlas-118.png",
}

export function getTile(tile: KingTileType): Pixi.Texture {
  return Pixi.Texture.from(tile);
}

export default { KingTileType, getTile };