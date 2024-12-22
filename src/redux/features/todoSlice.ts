import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export type Ttodo = {
    _id: string,
    title: string,
    description: string,
    isCompleted: boolean,
    priority: string,
}
type Tstate = {
    todos: Ttodo[],
}

const initialState: Tstate = {
    todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Ttodo>) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo._id !== action.payload)
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(todo => {
        if(todo._id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
        }
        return todo;
      })
    },
  },
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer