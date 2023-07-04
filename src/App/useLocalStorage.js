import React from "react";
// hook
function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    // si el storage no tiene nada, se crea un array vacio
    if (!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    const [item, setItem] = React.useState(parsedItem);
  
  
    // guardar los todos en el local storage
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      // guardar en el estado
      setItem(newItem);
    };
    return [item, saveItem];
  }

  export { useLocalStorage };