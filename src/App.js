import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoCreateButton } from './TodoCreateButton';
import React from 'react';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed:true},
//   {text: 'Tomar el Curso de Intro a React.js', completed:false},
//   {text: 'Llorar con la llorona', completed:false},
//   {text: 'LALALA', completed:false},
//   {text: 'usar estados derivados', completed:true},  
// ];
//  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  // si el storage no tiene nada, se crea un array vacio
  if (!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  
  // estado del todo
  const [todos, setTodos] = React.useState(parsedTodos);
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
    
  const searchedTodos = todos.filter(
    (todo) => {
      // mejorando el código
      // return todo.text.toLowerCase().includes(searchValue.toLowerCase());
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );
  // guardar los todos en el local storage
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    // guardar en el estado
    setTodos(newTodos);
  };

  // una fx que espera un parámetro
  const completeTodo = (text) => {
    // copia de todos con los 3 puntos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
    // recibir a c/u de los todos y c/u de todos tiene propiedad.text, 
    // si eso es = a ese texto que recibimos, es el todo que necesitamos
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  // una fx que espera un parámetro
  const deleteTodo= (text) => {
    // copia de todos con los 3 puntos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
    // recibir a c/u de los todos y c/u de todos tiene propiedad.text, 
    // si eso es = a ese texto que recibimos, es el todo que necesitamos
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); 
  } 
  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            // vamos a enviarle un actualizador de estado, crear una función que realice todo
            // fx de fxs
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoCreateButton />    
      </React.Fragment>
  );
}

export default App;
