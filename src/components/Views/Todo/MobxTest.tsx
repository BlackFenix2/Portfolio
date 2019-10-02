import React, { useContext } from 'react';
import todoStore from 'src/state/stores/todoStore';

const HookTest = () => useContext(todoStore);

const MobxTest = () => {
  const TodoStore = HookTest();
  return (
    <div>
      <p>lol {TodoStore.completedTasks}</p>
    </div>
  );
};

export default MobxTest;
