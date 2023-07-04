import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoCreateButton } from '../TodoCreateButton';

function AppUI({
    completedTodos,
    totalTodos, 
    searchValue, 
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo, 
}){
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

export { AppUI };