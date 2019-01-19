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
        <label>New Task</label>
        <input value={this.task} onChange={this.handleTaskChange} />
        <button onClick={this.handleAddTodo}>Add</button>
      </div>
    );
  }
}

export default Todo;
