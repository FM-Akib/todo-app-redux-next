"use client";
import React from 'react';
import {  Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger, } from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue, } from './ui/select';
import { Ttodo } from '@/redux/features/todoSlice';
import { useUpdateTodosMutation } from '@/redux/api/api';

const EditTodoModal = ({todo}:{todo:Ttodo}) => {
    const [task,setTask ] = React.useState('');
    const [newDescription,setDescription ] = React.useState('');
    const [newPriority,setPriority ] = React.useState('');
    const [updateTodos,{isLoading,isError}]=useUpdateTodosMutation();
    const {_id,title,description,priority,isCompleted} = todo;
  

    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error...</p>;
    const  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const options ={
            id:_id,
            data: {
                title : task || title,
                description: newDescription || description,
                isCompleted,
                priority: newPriority || priority,
              },
        }
        console.log(options);
        updateTodos(options);
        }
    return (
        <Dialog>
        <DialogTrigger asChild>
             <Button variant="secondary" className='bg-blue-100'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
             </svg>
             </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
                Fill in the form below to edit the task.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input 
              id="task"
              onBlur={(e) => setTask(e.target.value)}
               defaultValue={title}
               className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input 
                onBlur={(e) => setDescription(e.target.value)}
              id="description" 
              defaultValue={description}
              className="col-span-3" />
            </div> 

            <div className="grid grid-cols-4 items-center gap-4 ">
              <Label htmlFor="priority" className="text-right col-span-1 ">
                Priority
              </Label>
                <Select defaultValue={priority} onValueChange={(e) => setPriority(e)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Set Priority Level</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>   

          </div>
          <div className="flex justify-end ">
            <DialogClose asChild>
            <Button  type="submit">Add</Button>
            </DialogClose>
          </div>
          </form>
        </DialogContent>
        
      </Dialog>
    );
};

export default EditTodoModal;