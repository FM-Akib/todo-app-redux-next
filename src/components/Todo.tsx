import React from 'react';
import Container from './Container';
import TodoContainer from './TodoContainer';

const Todo = () => {
    return (
        <Container>
        <div>
            <h1 className='text-3xl font-bold  text-slate-700
             text-center py-10'>MY TODO LIST</h1>
            <TodoContainer/>
        </div>
        </Container>
    );
};

export default Todo;