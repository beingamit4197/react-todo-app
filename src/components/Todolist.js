import React, {useState, useEffect} from 'react'
import Todo from './Todo';
import Todoform from './Todoform'

function Todolist() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(todos))
};

const updateTodo = (todoId, newValue) => {
  if (!newValue.text || /^\s*$/.test(newValue.text)) {
    return;
  }

  setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
};

const removeTodo = id => {
    const removearr = [...todos].filter(todo => todo.id !== id);
      setTodos(removearr);
};

const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if(todo.id ) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
  setTodos(updatedTodos);
};

  return (
  <div>
      <h1>What's the plan for today?</h1>
      <Todoform onSubmit={addTodo}/>
      <Todo 
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
      />
  </div>
)};

export default Todolist