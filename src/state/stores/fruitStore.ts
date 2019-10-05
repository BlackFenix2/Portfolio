import { action, observable } from 'mobx';
import { fruitAPI } from 'src/services/API';
import { createContext } from 'react';

interface Fruit {
  id?: number;
}

class FruitStore {
  @observable fruit: Fruit = {};

  @observable fruitList: any[] = [];

  @observable isLoading = false;

  @observable error = false;

  @observable errorData: any[] = [];

  @action async addFruit(id) {
    this.start();
    try {
      this.fruit = await fruitAPI.addFruit(id);
    } catch (error) {
      this.error = true;
      this.errorData = error;
    } finally {
      this.isLoading = false;
    }
  }

  @action async deleteFruit(id) {
    this.start();
    try {
      this.fruit = await fruitAPI.deleteFruit(id);
    } catch (error) {
      this.error = true;
      this.errorData = error;
    } finally {
      this.isLoading = false;
    }
  }

  @action async getFruit(id) {
    this.start();
    try {
      this.fruit = await fruitAPI.getFruit(id);
    } catch (error) {
      this.error = true;
      this.errorData = error;
    } finally {
      this.isLoading = false;
    }
  }

  @action async getFruitList() {
    this.start();
    try {
      this.fruitList = await fruitAPI.getFruitList();
    } catch (error) {
      this.error = true;
      this.errorData = error;
    } finally {
      this.isLoading = false;
    }
  }

  @action async updateFruit(id) {
    this.start();
    try {
      this.fruit = await fruitAPI.updateFruit(id);
    } catch (error) {
      this.error = true;
      this.errorData = error;
    } finally {
      this.isLoading = false;
    }
  }

  start() {
    this.isLoading = true;
    this.error = false;
    this.errorData = [];
  }
}
export default createContext(new FruitStore());
