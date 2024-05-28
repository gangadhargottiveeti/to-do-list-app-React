export default function ToDoItem({todo, handleTodoClick}){
    return (
        <div className="todo-item">
            <li 
                className={todo.completed ? 'todo-list-item-striked' : 'todo-list-item'} 
                onClick={() => handleTodoClick(todo.id)}
                data-testid = "todo-item"
            >
                {todo.text}
            </li>
        </div>
    );
}