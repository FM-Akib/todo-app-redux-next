"use client";
import React from 'react';
import TodoCard from './TodoCard';
import AddTodoModal from './AddTodoModal';
import { Ttodo } from '@/redux/features/todoSlice';
import { useGetTodosQuery } from '@/redux/api/api';
import { FilterTodoModal } from './FilterTodoModal';

const TodoContainer = () => {
  const [priority, setPriority] = React.useState<string>("")
  
  
  
  
  //* From local state
    //  const todos = useAppSelector(state => state.todos.todos);

    //* From API
    const {data:todos,isLoading,isError}= useGetTodosQuery(priority);
    // const {data:todos,isLoading,isError}= useGetTodosQuery(undefined,{pollingInterval: 1000});
    //*pollingInterval: 1000 means that the query will be refetched every 1 second

    
    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error...</p>;
    return (
        <div>
          <div className="flex justify-between items-center pb-2">
            <AddTodoModal/>
            <FilterTodoModal priority={priority} setPriority={setPriority}/>
          </div>
          <div className="bg-primary-gradient rounded-md p-2 shadow-lg max-h-[500px]
           overflow-y-auto flex flex-col ">
            <div className="bg-white p-3 rounded-md w-full h-full space-y-3">
              {
                todos?.map((todo:Ttodo) => {
                  return <TodoCard key={todo._id} todo={todo}/>
                })
              }
              {
                todos?.length === 0 && <p className='text-center'>No task available</p>
              }
            
        
            </div>
          </div>
        </div>
    );
};

export default TodoContainer;