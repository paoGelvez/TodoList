import React from 'react';
import './TodoList.css';

const todos = [
    {text: 'cortar cebolla', completed : false},
    {text : 'tomar curso de mecanografia', completed : false},
    {text: 'pintar', completed:false},
];

function TodoList(props){
    return (
        
        <section className='TodoList'>
            <ul>
                {props.children}

            </ul>
        </section>
        
    );
}


export default  TodoList;