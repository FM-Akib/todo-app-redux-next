"use client";
import React from 'react';
import { Button } from './ui/button';
import { useRemoveTodosMutation, useUpdateTodosMutation } from '@/redux/api/api';
import { Ttodo } from '@/redux/features/todoSlice';
import EditTodoModal from './EditTodoModal';

const TodoCard = ({todo}:{todo:Ttodo}) => {
    //! For local state
    // const dispatch = useAppDispatch();
    //! For API
    const [removeTodos, {isLoading, isError}] = useRemoveTodosMutation();
    const [updateTodos, {isLoading:isUpdating, isError:isUpdateError}] = useUpdateTodosMutation();
    if(isLoading||isUpdating) return <p>Loading...</p>;
    if(isError||isUpdateError) return <p>Error...</p>;

    const {_id,title,description,priority,isCompleted} = todo;


    const deleteTask = (id:string) => {
        const options ={
            id,
        }
        removeTodos(options);
        // dispatch(deleteTodo(id));
    }
    const toggleStatus = () => {
        // const taskData ={
        //     title,
        //     description,
        //     isCompleted: !todo.isCompleted,
        //     priority,
        // }
        const options ={
            id:_id,
            data: {
                title,
                description,
                isCompleted: !todo.isCompleted,
                priority,
            },
        }
        updateTodos(options);
        // dispatch(toggleTodo(id));
    }
    return (
        <div className="flex flex-col md:flex-row items-start justify-between md:items-center p-3 bg-white gap-3 shadow-sm rounded-md border">
        <input type="checkbox"
        name = "isCompleted"
        checked={isCompleted}
        onChange={() => toggleStatus()}
        />
       <p className='font-semibold flex-1'>{title}</p>
       <p className='flex-1'>
        <span className={`h-3 w-3 inline-block rounded-full mr-2
            ${priority === 'high' ? 'bg-red-400':null }
            ${priority === 'medium' ? 'bg-yellow-400':null }
            ${priority === 'low' ? 'bg-green-400':null }
            `}></span>
        {priority}</p>
       <p className={isCompleted ? 'text-green-600 flex-1' : 'text-red-600 flex-1' }>
        {isCompleted ? 'Completed' : 'Pending'}</p>
       <p className='flex-[2]'>{description}</p>
       <div className="flex gap-2">
            <EditTodoModal todo={todo}/>

            <Button variant="destructive"
            onClick={() => deleteTask(_id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            </Button>
       </div>
    </div>
    );
};

export default TodoCard;