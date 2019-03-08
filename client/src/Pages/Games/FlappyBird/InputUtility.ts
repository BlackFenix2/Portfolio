const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  A: 65,
  D: 68,
  W: 87,
  S: 83,
  SPACE: 32,
  ENTER: 13
};

export default class InputUtility {
  keys: [boolean] = [null];

  bindKeys = () => {
    window.addEventListener('keydown', this.handleBindKeys);
    window.addEventListener('keyup', this.handleUnBindKeys);
  };

  unBindKeys = () => {
    window.removeEventListener('keydown', this.handleBindKeys);
    window.removeEventListener('keyup', this.handleUnBindKeys);
  };

  private handleBindKeys = e => {
    this.keys[e.keyCode] = true;
  };

  private handleUnBindKeys = e => {
    this.keys[e.keyCode] = false;
  };
}
