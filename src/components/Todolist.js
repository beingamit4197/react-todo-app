import React, {useState} from 'react'
import Todo from './Todo';
import Todoform from './Todoform'

function Todolist() {
const [todos, setTodos] = useState([])

const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
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
        />
    </div>
  )
}

export default Todolist