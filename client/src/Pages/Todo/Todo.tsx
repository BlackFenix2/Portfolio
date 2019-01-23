import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { todoStore } from 'src/state/stores/todoStore';

@observer(['todoStore'])
class Todo extends React.Component<any> {
  @observable private task: string = '';

  handleTaskChange = ({
    currentTarget: { value }
  }: React.SyntheticEvent<HTMLInputElement>) => {
    this.task = value;
  };

  handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    todoStore.addTodo(this.task);
    this.task = '';
  };

  handleClearTodo = (e: React.SyntheticEvent) => {
    todoStore.clearTodo();
    this.task = '';
  };

  render() {
    return (
      <>
        <div>
          <p>Test State:{todoStore.testState}</p>
        </div>
        <label>New Task</label>
        <form onSubmit={this.handleAddTodo}>
          <input value={this.task} onChange={this.handleTaskChange} />
          <button>Add</button>
        </form>
        <button onClick={this.handleClearTodo}>Clear TODO</button>
        <div>
          <TodoList />
        </div>
      </>
    );
  }
}

const TodoList = inject('todoStore')(
  observer(({ todoStore: { todoList } }) => (
    <ul>
      {todoList.map((todo, idx) => (
        <TodoListItem key={idx} todo={todo} />
      ))}
    </ul>
  ))
);

const TodoListItem = ({ todo }) => (
  <li>
    {todo.task} <input type="checkbox" value={todo.isComplete} />
  </li>
);

export default Todo;
