import React from 'react';
import {
  atom,
  useRecoilValue,
  useRecoilState,
} from 'recoil';

interface TodoItem {
  id: number,
  text: string,
  isComplete: boolean
}

const TodoItem: React.FC<{ item: TodoItem }> = ({item}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  // @ts-ignore
  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    // @ts-ignore
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    // @ts-ignore
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    // @ts-ignore
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText}/>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

function replaceItemAtIndex(arr: TodoItem[], index: number, newValue: TodoItem) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: TodoItem[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 1,
      text: "Maituli",
      isComplete: false
    },
    {
      id: 2,
      text: "Saippua",
      isComplete: false
    },
    {
      id: 2,
      text: "Mehuiza",
      isComplete: false
    }
  ]
});


function App() {
  const todoList = useRecoilValue(todoListState)

  return (
    <div>
      {todoList.map((todoItem: TodoItem) => (
        <TodoItem key={todoItem.id} item={todoItem}/>
      ))}
    </div>
  );
}

export default App;
