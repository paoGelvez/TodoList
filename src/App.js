import logo from './logoMarca2.png';
import React from 'react';
import TodoCounter from './TodoTitle.js';
import TodoSearch from './TodoSearch.js';
import TodoList from './TodoList';
import TodoItem from './TodoItem.js';
import CreateTodoButton from './CreateTodoButton.js';
import './App.css';



//comportamiento de mi aplicación
//estos son los componentes que nesecita nuestra aplicación y sus respectivos comportamientos 
//1) counter : para llevar un conteo de las tareas totales y completadas
//2) Search : para filtrar los TODOs de la lista 
//3) List : en donde tendremos cada uno de los TODOs 
//4) Item : será cada uno de los TODOs
//5) AddTodo : bootón para agregar un nuevo TODO


// React.Fragment : ayuda a agrupar los elementos sin introducir elementos extra a nivel del dom es como una etiqueta invisible que nos permite subir todo sin que jsx nos mand error 


function App () {
  return (
    <div className=' min-h-screen h-full flex items-center justify-center py-20 px-5'>
      <div className='container flex
       flex-col max-w-xl'>
      
        <TodoCounter/>

        <CreateTodoButton/>
        
        {/* <TodoSearch/> */}
        

        <TodoList>
          <TodoItem/>

        </TodoList>
      </div>

    </div>
  );
}

export default App;
