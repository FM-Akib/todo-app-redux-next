import React from 'react';
import TodoCard from './TodoCard';

const TodoContainer = () => {
    return (
        <div>
          <div className="">
            <button>add</button>
            <button>filter</button>
          </div>
          <div className="bg-yellow-400 rounded-md p-3 h-[500px] overflow-y-auto flex flex-col gap-2">
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
          </div>
        </div>
    );
};

export default TodoContainer;