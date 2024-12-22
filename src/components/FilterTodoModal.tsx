"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function FilterTodoModal() {
    const [priority, setPriority] = React.useState<string>("")
    console.log(priority)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant='outline' className=' text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
      </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter Todo</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={priority === "high"}
          onCheckedChange={() => setPriority('high')}
        >
          High
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
            checked={priority === "medium"}
          onCheckedChange={() => setPriority('medium')}
        >
            Medium
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
            checked={priority === "low"}
            onCheckedChange={() => setPriority('low')}
        >
            Low
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
