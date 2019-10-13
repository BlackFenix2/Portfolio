import { action, computed, observable } from 'mobx';
import { createContext } from 'react';
import createUUID from 'src/helpers/uuid';

interface Todo {
  id: string;
  task: string;
  isComplete: boolean;
}
class TodoStore {
  @observable
  todoList: Todo[] = [];

  @computed
  get completedTasks(): number {
    return this.todoList.filter(todo => todo.isComplete).length;
  }

  @action
  addTodo(task: string) {
    if (task) {
      this.todoList.push({
        id: createUUID(),
        task,
        isComplete: false
      });
    }
  }

  @action
  completeTodo(completedTodo: Todo) {
    this.todoList.find(todo => todo === completedTodo).isComplete = true;
  }

  @action
  clearTodo(todo: Todo) {
    const index = this.todoList.indexOf(
      this.todoList.find(item => item.id === todo.id)
    );
    this.todoList.splice(index, 1);
  }

  @action
  clearTodoList() {
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

export default createContext(new TodoStore());
