import * as React from 'react';
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
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useStoreState, useStoreActions } from 'src/state/hooks';
import SEO from 'src/components/modules/SEO';
import { css } from '@emotion/css';

const Todo = () => {
  const [task, setTask] = React.useState('');

  const todoModel = useStoreState((state) => state.todo);
  const todoActions = useStoreActions((actions) => actions.todo);

  const clearInput = () => {
    setTask('');
  };

  const handleTaskChange = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTask(value);
  };

  const handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    todoActions.addTodo(task);
    clearInput();
  };

  const handleClearTodoList = () => {
    todoActions.clearTodoList();
    clearInput();
  };

  const handleClearTodo = (todo) => {
    todoActions.clearTodo(todo);
    clearInput();
  };

  const handleToggleTask = (todo) => {
    todoActions.toggleTodo(todo);
  };

  return (
    <>
      <SEO title="Todo List" />
      <Grid>
        <div
          className={css`
            display: none;
          `}
        >
          <p>{JSON.stringify(todoModel.todoList, null, 4)}</p>
        </div>
        <div>
          <p>
            Completed Tasks:
            {todoModel.completedTasks}
          </p>
        </div>
        <div>
          <List>
            <TodoList
              list={todoModel.todoList}
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
    </>
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

export default Todo;
