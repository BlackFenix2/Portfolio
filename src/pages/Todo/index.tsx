import { observer } from 'mobx-react-lite';
import * as React from 'react';
import todoStore from 'src/state/stores/todoStore';
import {
  List,
  ListItem,
  Fade,
  Button,
  TextField,
  Grid
} from '@material-ui/core';

const Todo = () => {
  const [task, setTask] = React.useState('');

  const TodoStore = React.useContext(todoStore);

  const clearInput = () => {
    setTask('');
  };

  const handleTaskChange = ({
    currentTarget: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTask(value);
  };

  const handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    TodoStore.addTodo(task);
    clearInput();
  };

  const handleClearTodo = () => {
    TodoStore.clearTodo();
    clearInput();
  };

  const handleToggleTask = todo => {
    TodoStore.toggleTodo(todo);
  };

  return (
    <>
      <div>
        <p>
          Completed Tasks:
          {TodoStore.completedTasks}
        </p>
      </div>
      <div>
        <TodoList list={TodoStore.todoList} changeEvent={handleToggleTask} />
      </div>

      <form onSubmit={handleAddTodo}>
        <TextField value={task} label="Task" onChange={handleTaskChange} />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
      <Button variant="contained" color="secondary" onClick={handleClearTodo}>
        Clear TODO
      </Button>
    </>
  );
};

const TodoList = ({ list, changeEvent }) => (
  <List>
    {list.map((todo, idx) => (
      <TodoListItem key={idx} todo={todo} changeEvent={changeEvent} />
    ))}
  </List>
);

const TodoListItem = ({ todo, changeEvent }) => (
  <Fade in>
    <ListItem>
      {todo.task}
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() => changeEvent(todo)}
      />
    </ListItem>
  </Fade>
);

export default observer(Todo);
