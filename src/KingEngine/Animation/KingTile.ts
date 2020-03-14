import * as Pixi from 'pixi.js';

export enum KingTileType {
  Grass = "base_out_atlas-118.png",
}

export function getTile(res: Pixi.LoaderResource, tile: KingTileType): Pixi.Texture {
  return res.textures!![tile];
}

export default { KingTileType, getTile };