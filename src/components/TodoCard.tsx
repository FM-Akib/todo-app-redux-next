import React from 'react';
import { Button } from './ui/button';

const TodoCard = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white gap-2 shadow-sm rounded-md">
        <input type="checkbox"/>
       <p className='font-semibold flex-[2]'>Todo title</p>
       <p className='flex-1'>time</p>
       <p className='flex-[2]'>description</p>
       <div className="flex gap-2">
            <Button variant="secondary" className='bg-blue-200'>Edit</Button>
            <Button variant="destructive">Delete</Button>
       </div>
    </div>
    );
};

export default TodoCard;