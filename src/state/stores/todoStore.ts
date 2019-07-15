import { action, computed, observable } from 'mobx';
import { createContext } from 'react';
import remotedev from 'mobx-remotedev';

interface Todo {
  task: string;
  isComplete: boolean;
}
class TodoStore {
  @observable
  todoList: Todo[] = [];

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
    ).isComplete = !this.todoList.find(todo => todo === completedTodo)
      .isComplete;
  }
}

export default createContext(remotedev(new TodoStore()));
