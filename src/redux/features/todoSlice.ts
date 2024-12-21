import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export type Ttodo = {
    id: number,
    title: string,
    description: string,
    isCompleted: boolean,
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
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map(todo => {
        if(todo.id === action.payload) {
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