import { observable } from 'mobx';

export default class Sprite {
  @observable x: number;
  @observable y: number;

  width: number;
  height: number;
  rotation: number;
}
