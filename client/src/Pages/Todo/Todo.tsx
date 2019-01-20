import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { TodoStore } from 'src/state/stores/todoStore';

@inject(({ todoStore }) => ({
  todoStore
}))
@observer
class Todo extends React.Component<{ todoStore?: TodoStore }, any> {
  @observable private task: string = '';

  handleTaskChange = ({
    currentTarget: { value }
  }: React.SyntheticEvent<HTMLInputElement>) => {
    this.task = value;
  };

  handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.props.todoStore.addTodo(this.task);
    this.task = '';
  };

  render() {
    return (
      <>
        <div>
          <p>Test State:{this.props.todoStore.testState}</p>
        </div>
        <label>New Task</label>
        <form onSubmit={this.handleAddTodo}>
          <input value={this.task} onChange={this.handleTaskChange} />
          <button>Add</button>
        </form>
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
