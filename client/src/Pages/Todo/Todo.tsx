import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

@inject('todoStore')
@observer
class Todo extends React.Component<any, any> {
  @observable private task: string = '';

  handleTaskChange = ({
    currentTarget: { value }
  }: React.SyntheticEvent<HTMLInputElement>) => {
    this.task = value;
  };

  handleAddTodo = () => {
    this.props.todoStore.addTodo(this.task);
    this.task = '';
  };

  render() {
    return (
      <div>
        <div>
          <p>Test State:{this.props.todoStore.testState}</p>
        </div>
        <label>New Task</label>
        <input value={this.task} onChange={this.handleTaskChange} />
        <button onClick={this.handleAddTodo}>Add</button>
        <TodoList />
      </div>
    );
  }
}

const TodoList = inject('todoStore')(
  observer(({ todoStore: { todoList } }) =>
    todoList.map((todo, idx) => <TodoListItem key={idx} todo={todo} />)
  )
);

const TodoListItem = ({ todo }) => <div>{todo.task}</div>;

export default Todo;
