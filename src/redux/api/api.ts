import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005' }),
  //this is a name of cache todo, Ekhane aro tag type add hote pare.
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
        query: ()=>({
            url: '/tasks',
            method: 'GET',
        }),
        //providesTags: ['Todo'] means that when this query is called, it will provide the cache with the tag 'Todo'
        providesTags: ['Todo']
    }),
    addTodos: builder.mutation({
        query: (data)=>({
            url: '/tasks',
            method: 'POST',
            body: data
        }),
        //invalidatesTags: ['Todo'] means that when this query is called, it will invalidate the cache with the tag 'Todo'
        invalidatesTags: ['Todo']
    }),
    removeTodos: builder.mutation({
        query: (options)=>({
            url: `/tasks/${options.id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Todo']
    }),
    updateTodos: builder.mutation({
        query: (options)=>{
          return {
            url: `/tasks/${options.id}`,
            method: 'PUT',  
            body: options.data
          }
        },
        invalidatesTags: ['Todo']
    }),
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetTodosQuery, useAddTodosMutation, 
  useUpdateTodosMutation, useRemoveTodosMutation
} = baseApi