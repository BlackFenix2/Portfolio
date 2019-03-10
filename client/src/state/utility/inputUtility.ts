export const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  A: 65,
  D: 68,
  W: 87,
  S: 83,
  SPACE: 32,
  ENTER: 13,
  P: 80
};

export default class InputUtility {
  keys: [boolean] = [null];
  velY = 0;
  velX = 0;
  readonly speed = 2;
  readonly friction = 0.95;

  constructor() {
    window.addEventListener('keydown', this.handleBindKeys);
    window.addEventListener('keyup', this.handleUnBindKeys);
  }
  reset() {
    this.velY = 0;
    this.velX = 0;
  }

  private handleBindKeys = e => {
    if (Object.values(KEY).includes(e.keyCode)) {
      e.preventDefault();
    }
    this.keys[e.keyCode] = true;
    console.log(this.keys);
  };

  private handleUnBindKeys = e => {
    e.preventDefault();
    this.keys[e.keyCode] = false;
    console.log(this.keys);
  };
}
