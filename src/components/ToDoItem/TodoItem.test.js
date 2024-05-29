import { fireEvent, render, screen } from "@testing-library/react";
import ToDoItem from "./ToDoItem";

describe('TodoItem Component', ()=>{

    
    it('should render the todo item text on the screen', ()=>{
        const todoItem = {id : 1, text : "Read Springboot", completed : false}
        render(<ToDoItem todo={todoItem}/>)

        expect(screen.getByText(/Read Springboot/i)).toBeInTheDocument()
    })

    it('should call the handleTodoClick when it is clicked', ()=>{
        const handleTodoClick = jest.fn();
        const todoItem = {id : 1, text : "Read Springboot", completed : false}

        render(<ToDoItem todo={todoItem} handleTodoClick={handleTodoClick}/>)

        fireEvent.click(screen.getByText(/Read Springboot/i))
        expect(handleTodoClick).toHaveBeenCalledWith(todoItem.id)
    })

    it('should render the todo item with todo-list-item-striked class if completed',()=>{
        const todoItem = {id : 1, text : "Read Springboot", completed : true}

        render(<ToDoItem todo={todoItem}/>)

        expect(screen.getByText(/Read Springboot/i)).toHaveClass('todo-list-item-striked')
    })

})