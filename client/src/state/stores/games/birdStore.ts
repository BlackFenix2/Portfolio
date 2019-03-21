import { action, observable } from 'mobx';
import Bird from 'src/state/objects/bird';

import { interval, Timer } from 'd3-timer';
import Pipe from 'src/state/objects/pipe';
import InputUtility, { KEY } from 'src/state/utility/inputUtility';

export default class BirdStore {
  Bird: Bird = new Bird();

  NorthPipe: Pipe = new Pipe();

  SouthPipe: Pipe = new Pipe();

  PipeList: [Pipe];

  timer: Timer;

  input = new InputUtility();

  @observable GameStart: boolean = false;

  constructor() {
    this.initial();
  }

  @action Reset = () => {
    this.timer.stop();
    this.initial();
  };

  @action startGameLoop(target) {
    if (!this.GameStart) {
      this.GameStart = true;
      this.input.listen(target);
      this.timer = interval(() => this.gameStep(), 0.01);
    }
  }

  @action initial() {
    this.Bird.x = 10;
    this.Bird.y = 300;
    this.NorthPipe.x = 300;
    this.NorthPipe.y = 0;
    this.SouthPipe.x = 300;
    this.SouthPipe.y = 350;
    this.GameStart = false;
    this.input.reset();
  }

  @action stopGame = () => {
    this.timer.stop();
  };

  @action unMountGame = target => {
    this.timer.stop();
    this.input.dispose(target);
  };

  protected MovePipe = (x: number = 0, y: number = 0) => {
    this.SouthPipe.x -= x + 2;
    this.NorthPipe.x -= x + 2;
  };

  protected setPipe = (x: number = 600, y: number = 600) => {
    this.SouthPipe.x = x;
    this.NorthPipe.x = x;
  };

  protected MoveBird = (x: number = 0, y: number = 0) => {
    this.Bird.x += x;
    this.Bird.y -= y;
    this.Bird.rotation = y <= 2 ? y : 2;
  };

  // draw frames for game, called in interval
  protected gameStep = () => {
    const { keys, speed } = this.input;
    const gravity = 2;
    // check for input

    // space key to flap bird, incease speed to offset gravity
    if (keys[KEY.SPACE] || keys[KEY.mouseClick]) {
      if (this.input.velY < speed + gravity * 2) {
        this.input.velY++;
      }
    }

    // set bird velocity
    this.input.velY *= this.input.friction;
    this.input.velX *= this.input.friction;

    // prevent bird from going out of bounds
    if (this.Bird.y <= 0) {
      this.Bird.y = 0;
    }

    this.MoveBird(this.input.velX, this.input.velY - gravity);

    // move pipe
    this.MovePipe(1, 0);
    if (this.NorthPipe.x + this.NorthPipe.width <= 0) {
      this.setPipe();
    }

    // stop game if bird crashes

    // check one and two ensure bird is inside the pipes X axis

    const one = this.Bird.x + this.Bird.width >= this.NorthPipe.x;
    const two = this.Bird.x <= this.SouthPipe.x + this.SouthPipe.width;

    // check if the bird collided with the topmost pipe
    const northCollide =
      this.Bird.y <= this.NorthPipe.y + this.NorthPipe.height;

    // check if the bird collided with the bottommost pipe
    const southCollide = this.Bird.y + this.Bird.height >= this.SouthPipe.y;

    if (one && two && (northCollide || southCollide)) {
      this.stopGame();
    }

    if (this.Bird.y >= 400 - this.Bird.height) {
      this.stopGame();
    }
  };
}
