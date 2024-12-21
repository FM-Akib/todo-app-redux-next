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
import { useAppDispatch } from '@/redux/hook';
import { addTodo } from '@/redux/features/todoSlice';

const AddTodoModal = () => {
    const [task,setTask ] = React.useState('');
    const [description,setDescription ] = React.useState('');
    const dispatch = useAppDispatch();
    const  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const taskDetails = {
          id: Math.floor(Math.random() * 1000),
          title : task,
          description,
          isCompleted: false,
        }
        dispatch(addTodo(taskDetails));
      }
    return (
        <Dialog>
        <DialogTrigger asChild>
         <Button className='bg-primary-gradient text-gray-700'>Add Task</Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
                Fill in the form below to add a new task.
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
               
               className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input 
                onBlur={(e) => setDescription(e.target.value)}
              id="description" 
              
              className="col-span-3" />
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

export default AddTodoModal;