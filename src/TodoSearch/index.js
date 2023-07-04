import React from 'react';
import './TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue,
}){    
    return (
        <input 
            placeholder="Ingresa el texto a buscar" 
            className="TodoSearch"
            value={searchValue}
            onChange={
                (event) => {
                    setSearchValue(event.target.value);
                    // console.log ('Escribiste en el TodoSearch')
                    // console.log(event)
                    // console.log(event.target)
                    // console.log(event.target.value)
                }
            }
        />
    );
}

export { TodoSearch };