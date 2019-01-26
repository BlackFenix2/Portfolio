import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import TodoStore from 'src/state/stores/todoStore';

interface Props {
  TodoStore: TodoStore;
}
@inject(TodoStore.name)
@observer
class Todo extends React.Component<Props> {
  @observable task: string = '';

  clearInput = () => {
    this.task = '';
  };

  handleTaskChange = ({
    currentTarget: { value }
  }: React.SyntheticEvent<HTMLInputElement>) => {
    this.task = value;
  };

  handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.props.TodoStore.addTodo(this.task);
    this.clearInput();
  };

  handleClearTodo = (e: React.SyntheticEvent) => {
    this.props.TodoStore.clearTodo();
    this.clearInput();
  };

  handleToggleTask = todo => {
    this.props.TodoStore.toggleTodo(todo);
  };

  render() {
    return (
      <>
        <div>
          <p>Test State:{this.props.TodoStore.testState}</p>
          <p>Test Task:{this.task}</p>
          <p>Completed Tasks:{this.props.TodoStore.completedTasks}</p>
        </div>
        <label>New Task</label>
        <form onSubmit={this.handleAddTodo}>
          <input value={this.task} onChange={this.handleTaskChange} />
          <button>Add</button>
        </form>
        <button onClick={this.handleClearTodo}>Clear TODO</button>
        <div>
          <TodoList
            list={this.props.TodoStore.todoList}
            changeEvent={this.handleToggleTask}
          />
        </div>
      </>
    );
  }
}

const TodoList = ({ list, changeEvent }) => (
  <ul>
    {list.map((todo, idx) => (
      <TodoListItem key={idx} todo={todo} changeEvent={changeEvent} />
    ))}
  </ul>
);

const TodoListItem = ({ todo, changeEvent }) => (
  <li>
    {todo.task}
    <input
      type="checkbox"
      value={todo.isComplete}
      onChange={() => changeEvent(todo)}
    />
  </li>
);

export default Todo;
