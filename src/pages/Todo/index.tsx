import TextField from '@material-ui/core/TextField';

import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { List, Transition } from 'semantic-ui-react';
import todoStore from 'src/state/stores/todoStore';
import MobxTest from 'src/components/Views/Todo/MobxTest';

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
        <MobxTest />
      </div>

      <form onSubmit={handleAddTodo}>
        <TextField value={task} label="Task" onChange={handleTaskChange} />
        <button>Add</button>
      </form>
      <button onClick={handleClearTodo}>Clear TODO</button>
      <div>
        <TodoList list={TodoStore.todoList} changeEvent={handleToggleTask} />
      </div>
    </>
  );
};

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
      checked={todo.isComplete}
      onChange={() => changeEvent(todo)}
    />
  </List.Item>
);

export default observer(Todo);
