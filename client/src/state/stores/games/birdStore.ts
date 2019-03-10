import { action, observable } from 'mobx';
import Bird from 'src/state/objects/bird';

import * as D3 from 'd3';
import Pipe from 'src/state/objects/Pipe';
import InputUtility, { KEY } from 'src/state/utility/inputUtility';

export default class BirdStore {
  Bird: Bird = new Bird(10, 300);

  NorthPipe: Pipe = new Pipe(300, 0);

  SouthPipe: Pipe = new Pipe(300, 350);

  timer: D3.Timer;

  input = new InputUtility();

  @observable GameStart: boolean = false;

  constructor() {
    this.initial();
  }

  @action Reset = () => {
    this.timer.stop();
    this.initial();
  };

  @action startGameLoop() {
    if (!this.GameStart) {
      this.GameStart = true;
      this.timer = D3.interval(() => this.gameStep(), 10);
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

  @action protected MovePipe = (x: number = 0, y: number = 0) => {
    this.SouthPipe.x -= x;
    this.NorthPipe.x -= x;
  };

  @action protected setPipe = (x: number = 600, y: number = 600) => {
    this.SouthPipe.x = x;
    this.NorthPipe.x = x;
  };

  @action protected MoveBird = (x: number = 0, y: number = 0) => {
    this.Bird.x += x;
    this.Bird.y -= y;
  };

  // draw frames for game, called in interval
  @action protected gameStep = () => {
    const { keys, speed } = this.input;
    // check for input
    if (keys[KEY.SPACE]) {
      if (this.input.velY < speed) {
        this.input.velY++;
      }
    }

    if (keys[KEY.W]) {
      if (this.input.velY < speed) {
        this.input.velY++;
      }
    }

    if (keys[KEY.S]) {
      if (this.input.velY > -speed) {
        this.input.velY--;
      }
    }

    if (keys[KEY.A]) {
      if (this.input.velX > -speed) {
        this.input.velX--;
      }
    }
    if (keys[KEY.D]) {
      if (this.input.velX < speed) {
        this.input.velX++;
      }
    }

    if (keys[KEY.P]) {
      this.timer.stop();
    }

    // move bird
    this.input.velY *= this.input.friction;
    this.input.velX *= this.input.friction;
    this.MoveBird(this.input.velX, this.input.velY);

    // move pipe
    this.MovePipe(1, 0);
    if (this.NorthPipe.x + this.NorthPipe.width <= 0) {
      this.setPipe();
    }

    // stop game if bird crashes

    // check one and two ensure ship is inside the asteriod fields X axis

    const one = this.Bird.x + this.Bird.width >= this.NorthPipe.x;
    const two = this.Bird.x <= this.SouthPipe.x + this.SouthPipe.width;

    // check if the ship collided with the topmost pipe
    const northCollide =
      this.Bird.y <= this.NorthPipe.y + this.NorthPipe.height;

    // check if the ship collided with the bottommost pipe
    const southCollide = this.Bird.y + this.Bird.height >= this.SouthPipe.y;

    if (one && two && (northCollide || southCollide)) {
      console.log('Flappy Bird crashed!');
      this.timer.stop();
    }
  };
}
