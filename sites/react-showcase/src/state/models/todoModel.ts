import { Computed, Action, action, computed } from 'easy-peasy';
import createUUID from 'src/helpers/uuid';

interface Todo {
  id: string;
  task: string;
  isComplete: boolean;
}

export interface TodoModel {
  todoList: Todo[];
  completedTasks: Computed<TodoModel, number>;
  addTodo: Action<TodoModel, string>;
  toggleTodo: Action<TodoModel, Todo>;
  clearTodo: Action<TodoModel, Todo>;
  clearTodoList: Action<TodoModel>;
}

const todoModel: TodoModel = {
  todoList: [],
  completedTasks: computed(
    (state) => state.todoList.filter((todo) => todo.isComplete).length
  ),
  addTodo: action((state, payload) => {
    state.todoList.push({
      id: createUUID(),
      task: payload,
      isComplete: false,
    });
  }),
  toggleTodo: action((state, payload) => {
    const index = state.todoList.findIndex((item) => item.id === payload.id);
    state.todoList[index].isComplete = !payload.isComplete;
  }),
  clearTodo: action((state, payload) => {
    const index = state.todoList.findIndex((item) => item.id === payload.id);
    const newList = [...state.todoList];
    newList.splice(index, 1);
    state.todoList = newList;
  }),

  clearTodoList: action((state, _) => {
    state.todoList = [];
  }),
};

export default todoModel;
