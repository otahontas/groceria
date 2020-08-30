import React from 'react';
import {
  CssBaseline,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import FolderIcon from "@material-ui/icons/Folder"
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit'

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
    <ListItem>
      <ListItemIcon onClick={toggleItemCompletion}>
        <Checkbox
          edge="start"
          checked={item.isComplete}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText
        style={{ textDecoration : item.isComplete? 'line-through' : 'none' }}
        primary={item.text}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit">
          <EditIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
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
      id: 3,
      text: "Mehuiza",
      isComplete: false
    }
  ]
});


function App() {
  const todoList = useRecoilValue(todoListState)

  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="sm">
        <List>
          {todoList.map((todoItem: TodoItem) => (
            <TodoItem key={todoItem.id} item={todoItem}/>
          ))}
        </List>
      </Container>
    </React.Fragment>
  );
}

export default App;
