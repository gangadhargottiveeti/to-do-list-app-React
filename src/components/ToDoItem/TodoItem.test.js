import { fireEvent, render, screen } from "@testing-library/react";
import ToDoItem from "./ToDoItem";

describe('TodoItem Component', ()=>{

    
    it('should render the todo name on the screen', ()=>{
        const todoItem = {id : 1, text : "Read Springboot", completed : false}
        render(<ToDoItem todo={todoItem}/>)
        const todoTextElement = screen.getByTestId("todo-item")
        expect(todoTextElement).toBeInTheDocument();
    })

    it('should call the onClick prop when it is clicked', ()=>{
        const handleClick = jest.fn();
        const todoItem = {id : 1, text : "Read Springboot", completed : false}

        render(<ToDoItem todo={todoItem} handleTodoClick={handleClick}/>)

        fireEvent.click(screen.getByTestId("todo-item"))
        fireEvent.click(screen.getByTestId("todo-item"))
        expect(handleClick).toHaveBeenCalledTimes(2);
    })

})