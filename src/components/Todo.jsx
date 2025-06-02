
import './Todo.css';



function Todo({title, par, todoDelete}) {
    return (
        <div className='todo'>
            <h2>{title}</h2>
            <p>{par}</p>
            <button onClick={todoDelete}>Delete</button>
        </div>
    );
}


export default Todo;