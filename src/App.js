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
  {text: 'usar estados derivados', completed:true},
  
];

function App() {
  // estado del todo
  const [todos, setTodos] = React.useState(defaultTodos);
  // estado del todoSearch
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan todos de ' + searchValue);

  // estados derivados
  // porqué aquí el nombre cambia todos - todo?
  const completedTodos = todos.filter(
      // doble negación va convertir en booleano cualquier cosa que estamos devolviendo
      todo => !!todo.completed 
      ).length;
  const totalTodos = todos.length;
  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
