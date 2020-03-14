import * as Pixi from 'pixi.js';

export enum KingSprite {
  Bat = "bat",
  Bee = "bee",
  BigWorm = "big_worm",
  CatBlack = "cat_black",
  CatWhite = "cat_white",
  Dog = "dog",
  Eyeball = "eyeball",
  Ghost = "ghost",
  Goblin = "goblin",
  GoblinSword = "goblin_sword",
  Golem = "golem",
  ManEaterFlower = "man_eater_flower",
  Pumpking = "pumpking",
  Rat = "rat",
  Slime = "slime",
  SmallWorm = "small_worm",
  Snake = "snake",
}

export enum KingAnimation {
  Left = "left",
  Right = "right",
  Up = "up",
  Down = "down",
  AttackLeft = "left_attack",
  AttackRight = "right_attack",
  AttackUp = "up_attack",
  AttackDown = "down_attack",
  Die = "die",
}

const ATTACK_ANIM_SPRITES = new Set([KingSprite.Goblin, KingSprite.GoblinSword, KingSprite.Golem]);
const PACIFIST_ANIM_REPLACEMENTS = new Map([
  [KingAnimation.AttackLeft, KingAnimation.Left],
  [KingAnimation.AttackRight, KingAnimation.Right],
  [KingAnimation.AttackUp, KingAnimation.Up],
  [KingAnimation.AttackDown, KingAnimation.Down],
  [KingAnimation.Die, KingAnimation.Down],
]);

export function getAnimation(res: Pixi.LoaderResource, sprite: KingSprite, anim: KingAnimation): Pixi.Texture[] {
  if (!ATTACK_ANIM_SPRITES.has(sprite)) {
    anim = PACIFIST_ANIM_REPLACEMENTS.get(anim) ?? anim;
  }

  const animName = sprite + "/" + anim;
  return res.spritesheet?.animations[animName];
}

export default { KingSprite, KingAnimation, getAnimation };