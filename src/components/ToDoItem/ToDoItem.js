export default function ToDoItem({todo, handleTodoClick}){
    return (
        <div className="todo-item">
            <li 
                className={todo.completed ? 'todo-list-item-striked' : 'todo-list-item'} 
                onClick={() => handleTodoClick(todo.id)}
            >
                {todo.text}
            </li>
        </div>
    );
}