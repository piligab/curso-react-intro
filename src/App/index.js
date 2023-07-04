import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed:true},
//   {text: 'Tomar el Curso de Intro a React.js', completed:false},
//   {text: 'Llorar con la llorona', completed:false},
//   {text: 'LALALA', completed:false},
//   {text: 'usar estados derivados', completed:true},  
// ];
//  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('YODOS_V1');


function App() {
  // estado del todo
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  // estado del todoSearch
  const [searchValue, setSearchValue] = React.useState('');
  // console.log('Los usuarios buscan todos de ' + searchValue);

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

  // una fx que espera un parámetro
  const completeTodo = (text) => {
    // copia de todos con los 3 puntos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
    // recibir a c/u de los todos y c/u de todos tiene propiedad.text, 
    // si eso es = a ese texto que recibimos, es el todo que necesitamos
      (todo) => todo.text === text
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
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); 
  } 
  return (
    <AppUI
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue} 
      setSearchValue = {setSearchValue} 
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
