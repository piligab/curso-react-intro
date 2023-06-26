import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoCreateButton } from './TodoCreateButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed:true},
  {text: 'Tomar el Curso de Intro a React.js', completed:false},
  {text: 'Llorar con la llorona', completed:false},
  {text: 'otro', completed:false},
  
];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <TodoCreateButton />    
      </React.Fragment>
  );
}

export default App;
