import React, {useState} from 'react';
import {
  AppBar,
  CssBaseline,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Toolbar,
  IconButton,
  Paper,
  Fab,
  Checkbox,
  Typography
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel'
import EditIcon from '@material-ui/icons/Edit'
import Flip from "react-tiny-flip";
import {Formik, Form, Field} from 'formik';
import {TextField} from 'formik-material-ui';

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

type Values = Pick<TodoItem, 'text'>;


const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "relative",
    zIndex: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  fab: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "flex-end",
    marginTop: `-${theme.spacing(4)}px`,
  }
}))

const TodoItem: React.FC<{ item: TodoItem }> = ({item}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [editMode, setEditMode] = useState<boolean>(false)
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (text: string) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    newList.sort((a, b) => (a.isComplete === b.isComplete) ? 0 : a.isComplete ? 1 : -1);

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
      {editMode
        ? <div>
          <Formik
            initialValues={{
              text: item.text
            }}
            validate={values => {
              const errors: Partial<Values> = {};
              if (!values.text) errors.text = "Grocery can't be empty";
              return errors
            }}
            onSubmit={values => {
              editItemText(values.text)
              setEditMode(false)
            }}
          >
            {({submitForm}) => (
              <Form>
                <Field
                  component={TextField}
                  name="text"
                  type="text"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="save" onClick={submitForm}>
                    <SaveIcon/>
                  </IconButton>
                  <IconButton edge="end" aria-label="cencel edit" onClick={() => setEditMode(false)}>
                    <CancelIcon/>
                  </IconButton>
                </ListItemSecondaryAction>
              </Form>
            )}
          </Formik>
        </div>
        :
        <div>
          < ListItemText
            style={{textDecoration: item.isComplete ? 'line-through' : 'none'}}
            primary={item.text}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => setEditMode(true)}>
              <EditIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </div>
      }
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
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap>
            Groceries
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main">
        <Paper>
          <div className={classes.fab}>
            <Fab color="primary" aria-label="add">
              <AddIcon/>
            </Fab>
          </div>
          <List>
            <Flip>
              {todoList.map((todoItem: TodoItem) => (
                <div key={todoItem.id}>
                  <TodoItem item={todoItem}/>
                  <Divider/>
                </div>
              ))}
            </Flip>
          </List>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default App;
