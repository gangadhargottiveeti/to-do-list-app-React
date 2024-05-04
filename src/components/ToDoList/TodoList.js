import React, { useState } from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import { todos } from '../../data/todos'
export default function TodoList() {

    const [todoList, setTodoList] = useState(todos)
    const noTasksDescription = "Nothing to do Buddy. Sleep!!"

    const handleTodoClick = (id) => {
      setTodoList(todoList.map((todo => {
        if(todo.id === id){
          return {...todo, completed : !todo.completed}
        }
        return todo;
      })))
    }

    const handleRemoveCompletedClick = () => {
      setTodoList(todoList.filter((todo) => todo.completed === false))
    }

    const todosRender = () => {
      return todoList.map((todo, i) =>{
        return <ToDoItem todo={todo} key={i} handleTodoClick={handleTodoClick} />
      })
    }

    const noTodosRender = () => {
      return <i>{noTasksDescription}</i>
    }

  return (
    <div className='todo-list-container'>

      <div className='todo-list'>
        <ol> 
          {todoList.length > 0 ? todosRender() : noTodosRender()}
        </ol>
      </div>

      <div>
        {todoList.length > 0 ? <button onClick={handleRemoveCompletedClick}  className='remove-button'>Remove Completed</button> : '' }
        
      </div>


    </div>
  )
}