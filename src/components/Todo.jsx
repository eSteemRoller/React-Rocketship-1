
import './Todo.css';

function Todo({title, par}) {
    console.log(title)
    return (
        <div className='todo'>
            <h2>{title}</h2>
            <p>{par}</p>
            <button onClick={() => {
                console.log('clicked')
            }}>Delete</button>
        </div>
    );
}

export default Todo;