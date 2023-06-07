import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton(){
    return (

        <div className='mt-6 relative'>
            <div className='absolute inset-y-6 left-0 pl-3 flex items-center pointer-events-none'>
                <span className='border border-gray-500 border-solid p-3 rounded-full'> 

                </span>
            </div>

            <input type="text" className="focus:shadow-lg font-inter focus:shadow-indigo-300 pl-12 w-full py-4 bg-rose-200 rounded-xl outline-none transition-all duration-300 ease-in-out"
            placeholder='escribe tus pendientes..'
            />
            

        </div>

        
        
    );
}


export default  CreateTodoButton;