import TextField from '@material-ui/core/TextField';
import { inject } from 'mmlpx';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import TodoStore from 'src/state/stores/todoStore';

@observer
class Todo extends React.Component {
  @observable task: string = '';

  @inject() TodoStore: TodoStore;

  clearInput = () => {
    this.task = '';
  };

  handleTaskChange = ({
    currentTarget: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.task = value;
  };

  handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.TodoStore.addTodo(this.task);
    this.clearInput();
  };

  handleClearTodo = (e: React.SyntheticEvent) => {
    this.TodoStore.clearTodo();
    this.clearInput();
  };

  handleToggleTask = todo => {
    this.TodoStore.toggleTodo(todo);
  };

  render() {
    return (
      <>
        <div>
          <p>Completed Tasks:{this.TodoStore.completedTasks}</p>
        </div>

        <form onSubmit={this.handleAddTodo}>
          <TextField
            value={this.task}
            label="Task"
            onChange={this.handleTaskChange}
          />
          <button>Add</button>
        </form>
        <button onClick={this.handleClearTodo}>Clear TODO</button>
        <div>
          <TodoList
            list={this.TodoStore.todoList}
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
