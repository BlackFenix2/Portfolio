import { action, computed, observable } from 'mobx';

import mobxRemotedev from 'mobx-remotedev';

interface Todo {
  task: string;
  isComplete: boolean;
}
@mobxRemotedev
export default class TodoStore {
  @observable todoList: Todo[] = [];

  @observable testState: string = 'test';

  @computed
  get completedTasks(): number {
    return this.todoList.filter(todo => todo.isComplete).length;
  }

  @action
  addTodo(task: string) {
    if (task) {
      this.testState = 'added TODO';
      this.todoList.push({ task, isComplete: false });
    }
  }

  @action
  completeTodo(completedTodo: Todo) {
    this.todoList.find(todo => todo === completedTodo).isComplete = true;
  }

  @action
  clearTodo() {
    this.testState = 'Removed';
    this.todoList = [];
  }

  @action
  toggleTodo(completedTodo: Todo) {
    this.todoList.find(
      todo => todo === completedTodo
    ).isComplete = this.todoList.find(todo => todo === completedTodo).isComplete
      ? false
      : true;
  }
}

export const test = mobxRemotedev(TodoStore, { onlyActions: true });
