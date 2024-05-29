import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { todos as mockTodos } from "../../data/todos";

describe("TodoList component tests", ()=>{

    jest.mock("../../data/todos",() => ({
        todos : []
    }))

    beforeEach(()=>{
        mockTodos.length = 0;
    })

    it('should render the noTodosDescription if there are no todos', ()=>{
        render(<TodoList/>)

        expect(screen.getByText(/Nothing to do buddy. Sleep!!/i)).toBeInTheDocument();
        
    })

    it('should render the todos list when there are todos',()=>{
        mockTodos.push(
            { id: 1, text: 'Learn React', completed: false },
            { id: 2, text: 'Learn Testing', completed: true }
        )
        render(<TodoList/>)

        expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
        expect(screen.getByText(/Learn Testing/i)).toBeInTheDocument();

    })

    it('should renders the Remove Completed button if there are todos', ()=>{
        mockTodos.push(
            { id: 1, text: 'Learn React', completed: false }
        )

        render(<TodoList/>)

        const buttonElement = screen.getByRole('button', {name : "Remove Completed"})
        expect(buttonElement).toBeInTheDocument();
    })

    it('should not render Remove Completed button if there are no todos', ()=>{
        
        render(<TodoList/>)

        const buttonElement = screen.queryByRole('button', {name : "Remove Completed"})
        expect(buttonElement).toBeNull();
    })

    it('should remove completed todos when Remove Completed button is clicked', ()=>{
        mockTodos.push(
            { id: 1, text: 'Learn React', completed: false },
            { id: 2, text: 'Learn Testing', completed: true }
          );

          render(<TodoList />);
          const buttonElement = screen.getByRole('button', {name : "Remove Completed"})
          fireEvent.click(buttonElement)

          expect(screen.queryByText(/Learn Testing/i)).toBeNull()
          expect(screen.getByText(/Learn React/i)).toBeInTheDocument()
    })

    // it('should toggle todo completion status when clicked', ()=>{
    //     mockTodos.push(
    //         { id: 1, text: 'Learn React', completed: false },
    //         { id: 2, text: 'Learn Testing', completed: true }
    //     );

    //     render(<TodoList />);
  
    //     const firstTodo = screen.getByText(/Learn React/i);
    //     fireEvent.click(firstTodo);

    //     expect(mockTodos[0].completed).toBe(true);

    //     const secondTodo = screen.getByText(/Learn Testing/i);
    //     fireEvent.click(secondTodo);

    //     expect(mockTodos[1].completed).toBe(false);
    // })
    
})