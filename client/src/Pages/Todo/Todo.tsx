import TextField from '@material-ui/core/TextField';
import { inject } from 'mmlpx';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { List, Transition } from 'semantic-ui-react';
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
          <p>
            Completed Tasks:
            {this.TodoStore.completedTasks}
          </p>
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
  <Transition.Group as={List} duration={600} divided verticalAlign="middle">
    {list.map((todo, idx) => (
      <TodoListItem key={idx} todo={todo} changeEvent={changeEvent} />
    ))}
  </Transition.Group>
);

const TodoListItem = ({ todo, changeEvent, className = '' }) => (
  <List.Item className={className}>
    {todo.task}
    <input
      type="checkbox"
      value={todo.isComplete}
      onChange={() => changeEvent(todo)}
    />
  </List.Item>
);

export default Todo;
