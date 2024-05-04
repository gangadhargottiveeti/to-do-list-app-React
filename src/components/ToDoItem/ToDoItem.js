export default function ToDoItem({todo, handleTodoClick}){
    return (
        <div className="todo-item">
            <li 
                style={{textDecoration : todo.completed ? 'line-through' : 'none'}}
                className="todo-list-item" 
                onClick={() => handleTodoClick(todo.id)}
            >
                {todo.text}
            </li>
        </div>
    );
}