import { action, observable } from 'mobx';
import Bird from 'src/state/objects/bird';

import { interval, Timer } from 'd3-timer';
import Pipe from 'src/state/objects/pipe';
import InputUtility, { KEY } from 'src/state/utility/inputUtility';

export default class BirdStore {
  Bird: Bird = new Bird(30, 300);

  Pipe: Pipe = new Pipe(0, 0);

  PipeList: [{ NorthPipe: Pipe; SouthPipe: Pipe }] = [
    {
      NorthPipe: new Pipe(300, 0),
      SouthPipe: new Pipe(300, 350)
    }
  ];

  timer: Timer;

  input = new InputUtility();

  @observable gameStart: boolean = false;

  @observable gap: number = 90;

  constructor() {
    this.initial();
  }

  @action Reset = () => {
    this.timer.stop();
    this.initial();
  };

  @action startGameLoop(target) {
    if (!this.gameStart) {
      this.gameStart = true;
      this.input.listen(target);
      this.timer = interval(() => this.gameStep(), 0.01);
    }
  }

  @action initial() {
    this.PipeList.length = 1;
    this.PipeList[0].NorthPipe.x = 300;
    this.PipeList[0].NorthPipe.y = 0;
    this.PipeList[0].SouthPipe.x = 300;
    this.PipeList[0].SouthPipe.y = 350;
    this.Bird.x = 10;
    this.Bird.y = 300;
    this.Bird.rotation = 0;
    this.gameStart = false;
    this.input.reset();
  }

  @action stopGame = () => {
    this.timer.stop();
  };

  @action unMountGame = target => {
    if (this.timer) {
      this.timer.stop();
    }

    this.input.dispose(target);
  };

  protected MovePipe = (index: number, x: number, y: number = 0) => {
    this.PipeList[index].SouthPipe.x -= x;
    this.PipeList[index].NorthPipe.x -= x;
  };

  protected setPipe = (x: number = 600, y: number = 0) => {
    // set random with max height
    const random = Math.floor(Math.random() * 190);
    this.PipeList.push({
      NorthPipe: new Pipe(x, -random),
      SouthPipe: new Pipe(x, -random + this.Pipe.height + this.gap)
    });
  };

  protected MoveBird = (x: number, y: number) => {
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
        this.input.velY += 1;
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

    // check each pipe in array for bird crash and pipe movement
    this.PipeList.forEach((PipeColumn, index) => {
      // move pipe
      this.MovePipe(index, 3, 0);
      if (PipeColumn.NorthPipe.x + PipeColumn.NorthPipe.width <= 0) {
        // set new pipe Column
        this.setPipe();
        // delete out of bounds pipe Column
        this.PipeList.splice(0, 1);
      }

      // stop game if bird crashes

      // check one and two ensure bird is inside the pipes X axis

      const one = this.Bird.x + this.Bird.width >= PipeColumn.NorthPipe.x;
      const two =
        this.Bird.x <= PipeColumn.SouthPipe.x + PipeColumn.SouthPipe.width;

      // check if the bird collided with the topmost pipe
      const northCollide =
        this.Bird.y <= PipeColumn.NorthPipe.y + PipeColumn.NorthPipe.height;

      // check if the bird collided with the bottommost pipe
      const southCollide =
        this.Bird.y + this.Bird.height >= PipeColumn.SouthPipe.y;

      if (one && two && (northCollide || southCollide)) {
        this.stopGame();
      }

      if (this.Bird.y >= 400 - this.Bird.height) {
        this.stopGame();
      }
    });
  };
}
