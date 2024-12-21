import React from 'react';
import TodoCard from './TodoCard';
import { Button } from './ui/button';
import AddTodoModal from './AddTodoModal';

const TodoContainer = () => {
    return (
        <div>
          <div className="flex justify-between items-center pb-2">
            <AddTodoModal/>
            <Button variant='outline' className=' text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            </Button>
          </div>
          <div className="bg-primary-gradient rounded-md p-2 shadow-lg max-h-[500px]
           overflow-y-auto flex flex-col ">
            <div className="bg-white p-3 rounded-md w-full h-full space-y-3">
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            </div>
          </div>
        </div>
    );
};

export default TodoContainer;