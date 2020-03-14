import * as Pixi from 'pixi.js';
import KingGame from './KingGame';

export const SCREEN_WIDTH = 1280;
export const SCREEN_HEIGHT = 780;
export const TILE_SIZE = 32;

class KingEngine {
  pixiApp: Pixi.Application;
  fpsText: Pixi.Text | undefined;
  kingGame: KingGame;

  constructor(pixiApp: Pixi.Application, kingGame: KingGame) {
    this.pixiApp = pixiApp;
    this.kingGame = kingGame;
  }

  initialize() {
    this.pixiApp.stop();

    this.pixiApp.loader
      .add("sprites", process.env.PUBLIC_URL + "/assets/images/sprites.json")
      .add("tiles", process.env.PUBLIC_URL + "/assets/images/tiles.json")
      .load((loader, resources) => this.onAssetsLoaded(loader, resources));
    
    this.pixiApp.renderer.backgroundColor = 0xFFFF00;
    Pixi.settings.SCALE_MODE = Pixi.SCALE_MODES.NEAREST;
  }

  onAssetsLoaded(loader: Pixi.Loader, resources: Partial<Record<string, Pixi.LoaderResource>>) {
    const gameContainer = new Pixi.Container();
    this.pixiApp.stage.addChild(gameContainer);
    
    this.fpsText = new Pixi.Text("FPS: " + this.pixiApp.ticker.FPS);
    this.pixiApp.stage.addChild(this.fpsText);

    this.kingGame.initialize(gameContainer, resources["sprites"]!!);

    this.pixiApp.ticker.add(delta => this.update(delta));
    this.pixiApp.start();
  }

  update(delta: number) {
    this.pixiApp.stage.scale.x = this.pixiApp.view.width / SCREEN_WIDTH
    this.pixiApp.stage.scale.y = this.pixiApp.view.height / SCREEN_HEIGHT
    this.kingGame.update(delta);

    this.fpsText!.text = "FPS: " + Math.round(this.pixiApp.ticker.FPS);
  }
}


export default KingEngine;