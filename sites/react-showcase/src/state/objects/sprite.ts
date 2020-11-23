import { makeObservable, observable } from 'mobx';

export default class Sprite {
  @observable x: number;

  @observable y: number;

  @observable rotation: number;

  width: number;

  height: number;

  constructor(x: number, y: number) {
    makeObservable(this);
    this.x = x;
    this.y = y;
  }
}
