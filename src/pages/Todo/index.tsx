import { observer } from 'mobx-react-lite';
import * as React from 'react';
import todoStore from 'src/state/stores/todoStore';
import {
  ListItem,
  Fade,
  Button,
  TextField,
  ListItemText,
  Checkbox,
  Grid,
  Fab,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
  List,
  Hidden
} from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';
import css from '@emotion/css';

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

  const handleClearTodoList = () => {
    TodoStore.clearTodoList();
    clearInput();
  };

  const handleClearTodo = todo => {
    TodoStore.clearTodo(todo);
    clearInput();
  };

  const handleToggleTask = todo => {
    TodoStore.toggleTodo(todo);
  };

  return (
    <Grid item xs={3}>
      {/* Mobx hack */}
      <div
        css={css`
          display: none;
        `}
      >
        <p>{JSON.stringify(TodoStore.todoList, null, 4)}</p>
      </div>
      <div>
        <p>
          Completed Tasks:
          {TodoStore.completedTasks}
        </p>
      </div>
      <div>
        <List>
          <TodoList
            list={TodoStore.todoList}
            changeEvent={handleToggleTask}
            deleteEvent={handleClearTodo}
          />
        </List>
      </div>

      <form onSubmit={handleAddTodo}>
        <TextField value={task} label="Task" onChange={handleTaskChange} />
        <Fab type="submit" size="small" color="primary">
          <Add />
        </Fab>
      </form>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClearTodoList}
      >
        Clear TODO
      </Button>
    </Grid>
  );
};

const TodoList = ({ list, changeEvent, deleteEvent }) =>
  list.map((todo, idx) => (
    <TodoListItem
      key={idx}
      todo={todo}
      changeEvent={changeEvent}
      deleteEvent={deleteEvent}
    />
  ));

const TodoListItem = ({ todo, changeEvent, deleteEvent }) => (
  <Fade in>
    <ListItem button onClick={() => changeEvent(todo)}>
      <ListItemText primary={todo.task} />
      <ListItemIcon>
        <Checkbox checked={todo.isComplete} />
      </ListItemIcon>
      <ListItemSecondaryAction>
        <IconButton onClick={() => deleteEvent(todo)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </Fade>
);

export default observer(Todo);
