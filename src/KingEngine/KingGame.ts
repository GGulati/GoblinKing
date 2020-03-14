import * as Pixi from 'pixi.js';

import { KingAnimation, KingSprite, getAnimation } from './Animation/KingAnimation';
import { KingTileType, getTile } from './Animation/KingTile';
import { SCREEN_HEIGHT, SCREEN_WIDTH, TILE_SIZE } from './KingEngine';

class KingGame {
  ratPos: [number, number];

  ratSprite: Pixi.AnimatedSprite | undefined;

  constructor() {
    this.ratPos = [32, 32];
  }

  initialize(gameContainer: Pixi.Container, sprites: Pixi.LoaderResource) {
    this.ratSprite = new Pixi.AnimatedSprite(getAnimation(sprites, KingSprite.Dog, KingAnimation.Right));
    this.ratSprite.animationSpeed = 1.0 / 10.0;
    this.ratSprite.play();

    const map = new Pixi.Container();
    for (var y = 0; y < SCREEN_HEIGHT / TILE_SIZE; y++) {
      for (var x = 0; x < SCREEN_WIDTH / TILE_SIZE; x++) {
        const tile = new Pixi.Sprite(getTile(KingTileType.Grass));
        tile.x = x * TILE_SIZE;
        tile.y = y * TILE_SIZE;
        map.addChild(tile);
      }
    }

    gameContainer.addChild(map);
    gameContainer.addChild(this.ratSprite);
  }

  update(delta: number) {
    if (this.ratSprite != null) {
      this.ratSprite.x = this.ratPos[0];
      this.ratSprite.y = this.ratPos[1];
    }
  }

  getSaveGame(): string {
    return JSON.stringify({ ratPos: this.ratPos });
  }

  loadSavedGame(game: string) {
    const state = JSON.parse(game);
    this.ratPos = state.ratPos;
  }
}

export default KingGame;